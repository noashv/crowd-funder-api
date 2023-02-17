import {
  Resolver, Query, Args, Arg, Mutation,
} from 'type-graphql';
import { Service } from 'typedi';
import User from './user.entity';
import UserRepository from './user.repository';
import { UserArgs, UserInput } from './user.args';

@Service()
@Resolver(of => User)
class UserResolver {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

@Query(returns => User, { nullable: true })
  async user(@Args() queryParams: UserArgs) {
    return this.userRepository.findOneBy(queryParams);
  }

@Mutation(returns => User, { nullable: true })
async addUser(@Arg('data') newUserData: UserInput) {
  return this.userRepository.add(newUserData);
}
}

export default UserResolver;
