
import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import { createSchema } from '@src/modules';

export const configApollo = async (app) => {

    const schema = await createSchema();
    const apolloServer = new ApolloServer({ schema });
    await apolloServer.start();

    // apolloServer.applyMiddleware({app});
    app.use('/', cors<cors.CorsRequest>(), json(), expressMiddleware(apolloServer));
}