import {
  Resolver, Query, Args,
} from 'type-graphql';
import User from './user.type';
import UserRepository from './user.repository';
import UserArgs from './user.args';

@Resolver(of => User)
class UserResolver {
  private userRepository = new UserRepository();

@Query(returns => User)
  async user(@Args() queryParams: UserArgs) {
    return this.userRepository.findOneBy(queryParams);
  }
}

export default UserResolver;
