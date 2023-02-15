import {
  Resolver, Query, Args, Arg, Mutation,
} from 'type-graphql';
import User from './user.entity';
import UserRepository from './user.repository';
import { UserArgs, UserInput } from './user.args';

@Resolver(of => User)
class UserResolver {
  private userRepository = new UserRepository();

@Query(returns => User)
  async user(@Args() queryParams: UserArgs) {
    return this.userRepository.findOneBy(queryParams);
  }

@Mutation(returns => User)
async addUser(@Arg('data') newUserData: UserInput) {
  return this.userRepository.save(newUserData);
}
}

export default UserResolver;
