
import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { createSchema } from '@src/modules';

export const configApollo = async (app) => {

    const schema = await createSchema();
    const apolloServer = new ApolloServer({schema});
    await apolloServer.start();

    apolloServer.applyMiddleware({app});
}