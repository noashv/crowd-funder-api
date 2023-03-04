import {
  Resolver, Query, Args, Arg, Mutation,
} from 'type-graphql';
import { Service } from 'typedi';
import Fund from './fund.entity';
import FundRepository from './fund.repository';
import { FundArgs, FundInput } from './fund.args';

@Service()
@Resolver(of => Fund)
class FundResolver {
  constructor(
    private readonly fundRepository: FundRepository,
  ) {}

@Query(returns => Fund, { nullable: true })
  async fund(@Args() queryParams: FundArgs) {
    return this.fundRepository.findOneBy(queryParams);
  }

@Mutation(returns => Fund, { nullable: true })
async addFund(@Arg('data') newFundData: FundInput) {
  return this.fundRepository.add(newFundData);
}
}

export default FundResolver;
