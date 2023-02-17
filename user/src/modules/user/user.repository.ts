import { Repository, DataSource } from 'typeorm';
import { Service } from 'typedi';
import User from './user.entity';
import { UserArgs, UserInput } from './user.args';

@Service()
class UserRepository extends Repository<User> {
  private readonly repository: Repository<User>;

  public constructor(dataSource: DataSource) {
    super(User, dataSource.manager);

    this.repository = dataSource.getRepository(User);
  }

  async findOneBy(queryParams: UserArgs): Promise<User> {
    return this.repository.findOneBy(queryParams);
  }

  async add(newUserData: UserInput): Promise<User> {
    return this.repository.save(newUserData);
  }
}

export default UserRepository;
