import appDataSource from '@/config/db';
import Fund, { FundStatus } from './fund.entity';

const seedFund = async () => {
  const fundRepository = appDataSource.getRepository(Fund);

  const defaultFund = fundRepository.create({
    name: 'coffe cups in memory of gila',
    description: 'help us make coffe cups in memory of Gila Goldstien',
    endGoal: 100,
    deadline: new Date(),
    status: FundStatus.Unset,
    userId: '1',
  });

  return fundRepository.save(defaultFund);
};

export default seedFund;
