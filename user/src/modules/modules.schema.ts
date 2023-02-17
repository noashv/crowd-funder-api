import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

import UserResolver from './user/user.resolver';

const createSchema = async () => buildSchema({
  resolvers: [UserResolver],
  container: Container,
});

export default createSchema;
