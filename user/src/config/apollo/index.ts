import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import { createSchema } from '@/modules';
import formatError from './format-error';

const configApollo = async (app) => {
  const schema = await createSchema();
  const apolloServer = new ApolloServer({ schema, formatError });
  await apolloServer.start();

  app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(apolloServer));
};

export default configApollo;
