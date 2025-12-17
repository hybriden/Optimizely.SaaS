import { describe, it, expect } from 'vitest';
import { isGenericTypename, GENERIC_TYPE_NAMES, DEFAULT_LOCALE } from './constants';

describe('constants', () => {
  it('DEFAULT_LOCALE is en', () => {
    expect(DEFAULT_LOCALE).toBe('en');
  });

  it('GENERIC_TYPE_NAMES contains expected values', () => {
    expect(GENERIC_TYPE_NAMES).toContain('_Content');
    expect(GENERIC_TYPE_NAMES).toContain('_Page');
    expect(GENERIC_TYPE_NAMES).toContain('_IPage');
  });
});

describe('isGenericTypename', () => {
  it('returns true for generic type names', () => {
    expect(isGenericTypename('_Content')).toBe(true);
    expect(isGenericTypename('_Page')).toBe(true);
    expect(isGenericTypename('_IPage')).toBe(true);
    expect(isGenericTypename('_IContent')).toBe(true);
  });

  it('returns true for types starting with underscore', () => {
    expect(isGenericTypename('_CustomType')).toBe(true);
    expect(isGenericTypename('_Anything')).toBe(true);
  });

  it('returns false for specific type names', () => {
    expect(isGenericTypename('ArticlePage')).toBe(false);
    expect(isGenericTypename('HeroBlock')).toBe(false);
    expect(isGenericTypename('NewsPage')).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isGenericTypename(undefined)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isGenericTypename('')).toBe(false);
  });
});
