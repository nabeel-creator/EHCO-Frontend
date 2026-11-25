import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const targetDirs = ['content', 'src']

console.log('--- EHCO TODO Report (TODO(EHCO)) ---\n')
let totalTodos = 0

function scanDir(dir) {
  const fullDir = path.join(rootDir, dir)
  if (!fs.existsSync(fullDir)) return

  const entries = fs.readdirSync(fullDir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(fullDir, entry.name)
    const relativePath = path.relative(rootDir, fullPath)

    if (entry.isDirectory()) {
      scanDir(relativePath)
    } else if (entry.isFile() && /\.(json|jsx?|mdx?|html|css)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8')
      const lines = content.split('\n')
      const matches = []

      lines.forEach((line, index) => {
        if (line.includes('TODO(EHCO)')) {
          matches.push({ line: index + 1, text: line.trim() })
        }
      })

      if (matches.length > 0) {
        console.log(`\n📁 ${relativePath} (${matches.length} items):`)
        matches.forEach((m) => {
          console.log(`  L${m.line}: ${m.text}`)
        })
        totalTodos += matches.length
      }
    }
  }
}

targetDirs.forEach(scanDir)
console.log(`\n-------------------------------------`)
console.log(`Total TODO(EHCO) items found: ${totalTodos}\n`)
