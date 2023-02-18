import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

import FundResolver from './fund/fund.resolver';

const createSchema = async () => buildSchema({
  resolvers: [FundResolver],
  container: Container,
});

export default createSchema;
