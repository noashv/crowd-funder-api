import { Repository, DataSource } from 'typeorm';
import { Service } from 'typedi';
import Fund from './fund.entity';
import { FundArgs, FundInput } from './fund.args';

@Service()
class FundRepository extends Repository<Fund> {
  private readonly repository: Repository<Fund>;

  public constructor(dataSource: DataSource) {
    super(Fund, dataSource.manager);

    this.repository = dataSource.getRepository(Fund);
  }

  async findOneBy(queryParams: FundArgs): Promise<Fund> {
    return this.repository.findOneBy(queryParams);
  }

  async add(newFundData: FundInput): Promise<Fund> {
    return this.repository.save(newFundData);
  }
}

export default FundRepository;
