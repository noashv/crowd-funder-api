import {
  Resolver, Query, Args, Arg, Mutation,
} from 'type-graphql';
import { Service } from 'typedi';
import User from './fund.entity';
import UserRepository from './fund.repository';
import { FundArgs, FundInput } from './fund.args';

@Service()
@Resolver(of => User)
class FundResolver {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

@Query(returns => User, { nullable: true })
  async user(@Args() queryParams: FundArgs) {
    return this.userRepository.findOneBy(queryParams);
  }

@Mutation(returns => User, { nullable: true })
async addUser(@Arg('data') newUserData: FundInput) {
  return this.userRepository.add(newUserData);
}
}

export default FundResolver;
