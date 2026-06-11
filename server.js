#!/usr/bin/env node

import http from 'http';
import { Readable } from 'stream';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function start() {
  // Dynamically import the server handler
  const serverModule = await import(resolve(__dirname, './dist/server/server.js'));
  const handler = serverModule.default;

  // Create an HTTP server
  const server = http.createServer(async (req, res) => {
    try {
      // Build the full URL
      const protocol = req.headers['x-forwarded-proto'] || 'http';
      const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
      const url = new URL(req.url || '/', `${protocol}://${host}`);

      // Create a Web API Request
      let body = null;
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        // Convert Node.js readable stream to ReadableStream
        body = Readable.toWeb(req);
      }

      const request = new Request(url.toString(), {
        method: req.method,
        headers: new Headers(req.headers),
        body: body,
      });

      // Call the handler
      console.log(`${req.method} ${req.url}`);
      const response = await handler.fetch(request, {}, {});

      // Write response status and headers
      res.writeHead(response.status, Object.fromEntries(response.headers));

      // Write response body
      if (response.body) {
        const reader = response.body.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(value);
          }
        } finally {
          reader.releaseLock();
        }
      }
      
      res.end();
    } catch (error) {
      console.error('Error handling request:', error);
      res.writeHead(500, { 'content-type': 'text/html; charset=utf-8' });
      res.end(`<html><body><h1>500 - Internal Server Error</h1></body></html>`);
    }
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
