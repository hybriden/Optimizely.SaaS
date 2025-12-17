import { describe, it, expect } from 'vitest';
import {
  getPathVariations,
  normalizePathFromParams,
  resolveContentType,
  extractContentItems,
  extractFirstContentItem,
  formatError,
} from './utils';

describe('getPathVariations', () => {
  it('returns single path for root', () => {
    expect(getPathVariations('/')).toEqual(['/']);
  });

  it('returns all variations for simple path', () => {
    const variations = getPathVariations('/about');
    expect(variations).toContain('/about');
    expect(variations).toContain('about');
    expect(variations).toContain('/about/');
    expect(variations).toContain('about/');
    expect(variations).toHaveLength(4);
  });

  it('returns all variations for nested path', () => {
    const variations = getPathVariations('/news/article');
    expect(variations).toContain('/news/article');
    expect(variations).toContain('news/article');
    expect(variations).toContain('/news/article/');
    expect(variations).toContain('news/article/');
  });

  it('handles path without leading slash', () => {
    const variations = getPathVariations('about');
    expect(variations).toContain('about');
    expect(variations).toContain('about/');
  });
});

describe('normalizePathFromParams', () => {
  it('returns root for undefined params', () => {
    expect(normalizePathFromParams(undefined)).toBe('/');
  });

  it('returns root for empty array', () => {
    expect(normalizePathFromParams([])).toBe('/');
  });

  it('joins path segments with slashes', () => {
    expect(normalizePathFromParams(['about'])).toBe('/about');
    expect(normalizePathFromParams(['news', 'article'])).toBe('/news/article');
  });
});

describe('resolveContentType', () => {
  it('returns __typename for specific types', () => {
    expect(resolveContentType({ __typename: 'ArticlePage' })).toBe('ArticlePage');
  });

  it('returns _type for specific types', () => {
    expect(resolveContentType({ _type: 'HeroBlock' })).toBe('HeroBlock');
  });

  it('resolves from _metadata.types for generic types', () => {
    expect(
      resolveContentType({
        __typename: '_Content',
        _metadata: { key: '123', types: ['ArticlePage', '_Page', '_Content'] },
      })
    ).toBe('ArticlePage');
  });

  it('returns first specific type from _metadata.types', () => {
    expect(
      resolveContentType({
        __typename: '_Page',
        _metadata: { key: '123', types: ['NewsPage', '_Page'] },
      })
    ).toBe('NewsPage');
  });

  it('falls back to generic typename when no specific type available', () => {
    expect(
      resolveContentType({
        __typename: '_Content',
        _metadata: { key: '123' },
      })
    ).toBe('_Content');
  });

  it('returns undefined for empty content', () => {
    expect(resolveContentType({})).toBeUndefined();
  });
});

describe('extractContentItems', () => {
  it('returns empty array for null result', () => {
    expect(extractContentItems(null)).toEqual([]);
  });

  it('returns empty array for undefined result', () => {
    expect(extractContentItems(undefined)).toEqual([]);
  });

  it('returns empty array for missing content', () => {
    expect(extractContentItems({})).toEqual([]);
  });

  it('extracts array of items', () => {
    const result = {
      content: {
        items: [{ id: 1 }, { id: 2 }],
      },
    };
    expect(extractContentItems(result)).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('wraps single item in array', () => {
    const result = {
      content: {
        items: { id: 1 },
      },
    };
    expect(extractContentItems(result)).toEqual([{ id: 1 }]);
  });
});

describe('extractFirstContentItem', () => {
  it('returns null for empty result', () => {
    expect(extractFirstContentItem(null)).toBeNull();
  });

  it('returns first item from array', () => {
    const result = {
      content: {
        items: [{ id: 1 }, { id: 2 }],
      },
    };
    expect(extractFirstContentItem(result)).toEqual({ id: 1 });
  });

  it('returns single item', () => {
    const result = {
      content: {
        items: { id: 1 },
      },
    };
    expect(extractFirstContentItem(result)).toEqual({ id: 1 });
  });
});

describe('formatError', () => {
  it('formats Error instances', () => {
    const error = new Error('Test error');
    const formatted = formatError(error);
    expect(formatted.message).toBe('Test error');
    expect(formatted.stack).toBeDefined();
  });

  it('formats string errors', () => {
    const formatted = formatError('String error');
    expect(formatted.message).toBe('String error');
    expect(formatted.stack).toBeUndefined();
  });

  it('formats object errors', () => {
    const formatted = formatError({ custom: 'error' });
    expect(formatted.message).toBe('[object Object]');
  });
});
