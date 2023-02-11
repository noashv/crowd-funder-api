import { buildSchema } from 'type-graphql';
import { UserResolver } from './user/user.resolver';

export const createSchema = async () => {
 return await buildSchema({
    resolvers: [UserResolver]
})
}
