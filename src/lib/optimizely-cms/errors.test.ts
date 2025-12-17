import { describe, it, expect } from 'vitest';
import {
  CmsError,
  ContentNotFoundError,
  ComponentNotFoundError,
  ContentTypeResolutionError,
  isCmsError,
  isContentNotFoundError,
  isComponentNotFoundError,
} from './errors';

describe('CmsError', () => {
  it('creates error with message, code, and context', () => {
    const error = new CmsError('Test error', 'TEST_CODE', { foo: 'bar' });
    expect(error.message).toBe('Test error');
    expect(error.code).toBe('TEST_CODE');
    expect(error.context).toEqual({ foo: 'bar' });
    expect(error.name).toBe('CmsError');
  });

  it('serializes to JSON', () => {
    const error = new CmsError('Test', 'CODE', { key: 'value' });
    const json = error.toJSON();
    expect(json).toEqual({
      name: 'CmsError',
      code: 'CODE',
      message: 'Test',
      context: { key: 'value' },
    });
  });
});

describe('ContentNotFoundError', () => {
  it('creates error with path and locale', () => {
    const error = new ContentNotFoundError('/about', 'en');
    expect(error.message).toBe('Content not found at path: /about');
    expect(error.code).toBe('CONTENT_NOT_FOUND');
    expect(error.context).toEqual({ path: '/about', locale: 'en' });
    expect(error.name).toBe('ContentNotFoundError');
  });

  it('works without locale', () => {
    const error = new ContentNotFoundError('/about');
    expect(error.context).toEqual({ path: '/about', locale: undefined });
  });
});

describe('ComponentNotFoundError', () => {
  it('creates error with typename and available components', () => {
    const error = new ComponentNotFoundError('UnknownPage', ['ArticlePage', 'NewsPage']);
    expect(error.message).toBe('No component registered for typename: UnknownPage');
    expect(error.code).toBe('COMPONENT_NOT_FOUND');
    expect(error.context).toEqual({
      typename: 'UnknownPage',
      availableComponents: ['ArticlePage', 'NewsPage'],
    });
  });
});

describe('ContentTypeResolutionError', () => {
  it('creates error with content key and available types', () => {
    const error = new ContentTypeResolutionError('key-123', ['_Content', '_Page']);
    expect(error.message).toBe('Unable to resolve content type from metadata');
    expect(error.code).toBe('CONTENT_TYPE_RESOLUTION_FAILED');
    expect(error.context).toEqual({
      contentKey: 'key-123',
      availableTypes: ['_Content', '_Page'],
    });
  });
});

describe('Type guards', () => {
  it('isCmsError returns true for CmsError instances', () => {
    expect(isCmsError(new CmsError('test', 'CODE'))).toBe(true);
    expect(isCmsError(new ContentNotFoundError('/path'))).toBe(true);
    expect(isCmsError(new ComponentNotFoundError('Type'))).toBe(true);
  });

  it('isCmsError returns false for regular errors', () => {
    expect(isCmsError(new Error('test'))).toBe(false);
    expect(isCmsError('string')).toBe(false);
    expect(isCmsError(null)).toBe(false);
  });

  it('isContentNotFoundError identifies ContentNotFoundError', () => {
    expect(isContentNotFoundError(new ContentNotFoundError('/path'))).toBe(true);
    expect(isContentNotFoundError(new CmsError('test', 'CODE'))).toBe(false);
  });

  it('isComponentNotFoundError identifies ComponentNotFoundError', () => {
    expect(isComponentNotFoundError(new ComponentNotFoundError('Type'))).toBe(true);
    expect(isComponentNotFoundError(new CmsError('test', 'CODE'))).toBe(false);
  });
});
