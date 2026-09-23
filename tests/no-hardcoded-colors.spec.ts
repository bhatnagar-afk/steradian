import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const componentsDir = path.resolve(process.cwd(), 'src/components')

// Decorative line-art placeholders are allowed to hardcode their own duotone
// palette — everything else must draw color from the `--st-*` design tokens
// declared in globals.css, via a `st-*` class name.
const EXEMPT_DIR = path.join(componentsDir, 'illustrations')

function listFiles(dir: string, exts = ['.tsx', '.ts']): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return listFiles(full, exts)
    return exts.some((ext) => full.endsWith(ext)) ? [full] : []
  })
}

describe('components use design tokens, not hardcoded colors', () => {
  const files = fs
    .existsSync(componentsDir)
    ? listFiles(componentsDir).filter((f) => !path.normalize(f).startsWith(path.normalize(EXEMPT_DIR) + path.sep))
    : []

  const hexColorPattern = /#[0-9a-fA-F]{3,8}\b/g
  const tailwindColorPattern = /\b(?:bg|text|border|from|via|to)-(?:red|blue|green|yellow|purple|pink|amber|gray|slate|zinc|neutral|stone|orange|teal|cyan|indigo|violet|fuchsia|rose|lime|emerald|sky)-\d{2,3}\b/g

  for (const file of files) {
    const relativePath = path.relative(process.cwd(), file)
    const source = fs.readFileSync(file, 'utf8')

    it(`${relativePath} has no hardcoded colors`, () => {
      const hexMatches = [...source.matchAll(hexColorPattern)].map((m) => m[0])
      const tailwindMatches = [...source.matchAll(tailwindColorPattern)].map((m) => m[0])
      const offenses = [...new Set([...hexMatches, ...tailwindMatches])]

      expect(
        offenses,
        offenses.length
          ? `${relativePath} hardcodes color(s): ${offenses.join(', ')}. Use an "st-*" class backed by the --st-* tokens in globals.css instead.`
          : undefined,
      ).toHaveLength(0)
    })
  }

  if (files.length === 0) {
    it('component files exist to check', () => {
      expect(files.length).toBeGreaterThan(0)
    })
  }
})
