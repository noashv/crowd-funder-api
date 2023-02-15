import type { GraphQLFormattedError } from 'graphql';
import { ArgumentValidationError } from 'type-graphql';
import { unwrapResolverError } from '@apollo/server/errors';
import { ValidationError } from './validation-error';

function formatError(
  formattedError: GraphQLFormattedError,
  error: unknown,
): GraphQLFormattedError {
  const originalError = unwrapResolverError(error);

  // Validation
  if (originalError instanceof ArgumentValidationError) {
    return new ValidationError(originalError.validationErrors);
  }

  // Generic
  return formattedError;
}

export default formatError;
