import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const componentsDir = path.resolve(process.cwd(), 'src/components');

function listFiles(dir: string, exts = ['.tsx', '.ts', '.jsx', '.js']) {
  let results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(listFiles(full, exts));
    } else if (entry.isFile() && exts.some(e => full.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

describe('no hardcoded colors in components (file-level, ignoring components/ui)', () => {
  const allFiles = fs.existsSync(componentsDir) ? listFiles(componentsDir) : [];

  const ignoreDir = path.join(componentsDir, 'ui');
  const files = allFiles.filter(f => {
    const normalized = path.normalize(f);
    // exclude anything inside src/components/ui
    return !normalized.startsWith(path.normalize(ignoreDir + path.sep)) && normalized !== path.normalize(ignoreDir);
  });

  const hexRe = /#[0-9a-fA-F]{3,6}\b/g;
  const twRe = /\b(?:bg|text|border|hover:bg|hover:text|from|via|to)-[a-z]+(?:-\d{1,3})?\b/g;
  const themeImportRe = /from\s+['"]@\/config\/theme['"]|@\/config\/theme/;

  for (const f of files) {
    const rel = path.relative(process.cwd(), f);
    const src = fs.readFileSync(f, 'utf8');

    it(`${rel} — color usage should come from \`@/config/theme\``, () => {
      const importedTheme = themeImportRe.test(src);

      const hexMatches = [...(src.matchAll(hexRe))].map(m => m[0]);
      const twMatches = [...(src.matchAll(twRe))].map(m => m[0]);

      const offenses: string[] = [];
      if (hexMatches.length && !importedTheme) offenses.push(`hex: ${[...new Set(hexMatches)].join(', ')}`);
      if (twMatches.length && !importedTheme) offenses.push(`tailwind: ${[...new Set(twMatches)].join(', ')}`);

      expect(offenses, offenses.length ? `Found color usages in ${rel} without importing @/config/theme:\n${offenses.join('\n')}` : undefined).toHaveLength(0);
    });
  }

  if (files.length === 0) {
    it('no component files found (after ignoring components/ui)', () => {
      expect(files.length).toBeGreaterThan(0);
    });
  }
});
