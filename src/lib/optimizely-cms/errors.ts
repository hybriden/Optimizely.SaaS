/**
 * Custom error classes for Optimizely CMS integration
 */

/**
 * Base error class for CMS-related errors
 */
export class CmsError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'CmsError';
    // Maintains proper stack trace for where error was thrown
    Error.captureStackTrace?.(this, this.constructor);
  }

  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      context: this.context,
    };
  }
}

/**
 * Error thrown when content is not found
 */
export class ContentNotFoundError extends CmsError {
  constructor(path: string, locale?: string) {
    super(
      `Content not found at path: ${path}`,
      'CONTENT_NOT_FOUND',
      { path, locale }
    );
    this.name = 'ContentNotFoundError';
  }
}

/**
 * Error thrown when a component is not registered in the factory
 */
export class ComponentNotFoundError extends CmsError {
  constructor(typename: string, availableComponents?: string[]) {
    super(
      `No component registered for typename: ${typename}`,
      'COMPONENT_NOT_FOUND',
      { typename, availableComponents }
    );
    this.name = 'ComponentNotFoundError';
  }
}

/**
 * Error thrown when content type cannot be resolved
 */
export class ContentTypeResolutionError extends CmsError {
  constructor(contentKey?: string, availableTypes?: string[]) {
    super(
      'Unable to resolve content type from metadata',
      'CONTENT_TYPE_RESOLUTION_FAILED',
      { contentKey, availableTypes }
    );
    this.name = 'ContentTypeResolutionError';
  }
}

/**
 * Error thrown when GraphQL client configuration is invalid
 */
export class ClientConfigurationError extends CmsError {
  constructor(message: string, missingConfig?: string[]) {
    super(
      message,
      'CLIENT_CONFIGURATION_ERROR',
      { missingConfig }
    );
    this.name = 'ClientConfigurationError';
  }
}

/**
 * Error thrown when authentication fails
 */
export class AuthenticationError extends CmsError {
  constructor(reason: string) {
    super(
      `Authentication failed: ${reason}`,
      'AUTHENTICATION_FAILED',
      { reason }
    );
    this.name = 'AuthenticationError';
  }
}

/**
 * Type guard to check if an error is a CMS error
 */
export function isCmsError(error: unknown): error is CmsError {
  return error instanceof CmsError;
}

/**
 * Type guard for specific error types
 */
export function isContentNotFoundError(error: unknown): error is ContentNotFoundError {
  return error instanceof ContentNotFoundError;
}

export function isComponentNotFoundError(error: unknown): error is ComponentNotFoundError {
  return error instanceof ComponentNotFoundError;
}
