import { describe, it, expect } from 'vitest';
import { themes } from '../src/config/theme';

describe('themes configuration', () => {
  it('exports both light and dark themes', () => {
    expect(typeof themes).toBe('object');
    expect(themes).toHaveProperty('light');
    expect(themes).toHaveProperty('dark');
  });

  it('each theme contains required keys', () => {
    const required = ['background', 'foreground', 'text', 'textMuted', 'cardBackground', 'border', 'hover'];
    for (const key of ['light', 'dark']) {
      const t = (themes as any)[key];
      expect(typeof t).toBe('object');
      for (const r of required) {
        expect(t).toHaveProperty(r);
      }
    }
  });
});
