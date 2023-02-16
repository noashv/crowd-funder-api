import type { GraphQLFormattedError } from 'graphql';
import { ArgumentValidationError } from 'type-graphql';
import { unwrapResolverError } from '@apollo/server/errors';
import { ValidationError } from './validation-error';
/**
 * **NOTE**
 *
 * this function is for returning a formatted response from `class-validator`
 * copied from here
 * @see  https://github.com/MichalLytek/type-graphql/issues/1397#issuecomment-1351432122
 *
 * (a beta version of `type-graphql` is used in the project, so this function
 * might not be needed with a stable release)
 */
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
