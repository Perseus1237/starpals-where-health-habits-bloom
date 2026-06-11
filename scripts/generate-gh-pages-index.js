import fs from 'fs'
import path from 'path'

const [targetDir = 'dist/client', baseHref = '/starpals-where-health-habits-bloom/'] = process.argv.slice(2)
const outDir = path.resolve(process.cwd(), targetDir)
const assetsDir = path.join(outDir, 'assets')

if (!fs.existsSync(outDir)) {
  throw new Error(`Target directory does not exist: ${outDir}`)
}
if (!fs.existsSync(assetsDir)) {
  throw new Error(`Assets directory does not exist: ${assetsDir}`)
}

const files = fs.readdirSync(assetsDir)
const entryCandidates = files.filter((file) => /^index-.*\.js$/.test(file))
if (entryCandidates.length === 0) {
  throw new Error('No client index entry file found in assets')
}

let entryFile = null
for (const file of entryCandidates) {
  const content = fs.readFileSync(path.join(assetsDir, file), 'utf8')
  if (content.includes('hydrateRoot(')) {
    entryFile = file
    break
  }
}

if (!entryFile) {
  entryFile = entryCandidates[0]
}

const normalizedBaseHref = baseHref.endsWith('/') ? baseHref : `${baseHref}/`
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>StarPals</title>
    <base href="${normalizedBaseHref}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${entryFile}"></script>
  </body>
</html>
`

fs.writeFileSync(path.join(outDir, 'index.html'), html)
fs.writeFileSync(path.join(outDir, '.nojekyll'), '')
console.log(`Created ${path.join(targetDir, 'index.html')} using ${entryFile}`)
