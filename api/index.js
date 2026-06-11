import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let serverHandler = null;

async function getServerHandler() {
  if (!serverHandler) {
    const serverModule = await import(resolve(__dirname, '../dist/server/server.js'));
    serverHandler = serverModule.default;
  }
  return serverHandler;
}

export default async (req, res) => {
  try {
    const handler = await getServerHandler();
    
    // Construct the URL
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = `${protocol}://${host}${req.url || '/'}`;
    
    // Create a Request object
    const request = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : null,
    });
    
    // Call the server handler
    const response = await handler.fetch(request, {}, {});
    
    // Set response status and headers
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    // Send the response body
    if (response.body) {
      const reader = response.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(Buffer.from(value));
        }
      } finally {
        reader.releaseLock();
      }
    }
    
    res.end();
  } catch (error) {
    console.error('API error:', error);
    res.status(500);
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end(`<html><body><h1>500 - Internal Server Error</h1><pre>${error.message}</pre></body></html>`);
  }
};
