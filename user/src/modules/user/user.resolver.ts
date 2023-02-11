import { Resolver, Query } from 'type-graphql';
import User from './user.entity';

@Resolver(of => User)
class UserResolver {
// more to come!

@Query(returns => String)
  async user() {
    return 'hello!';
  }
}

export default UserResolver;
