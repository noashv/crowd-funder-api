import { Repository, DataSource } from 'typeorm';
import { Service } from 'typedi';
// import appDataSource from '@/config/db';
import User from './user.entity';
import { UserArgs, UserInput } from './user.args';

@Service()
class UserRepository extends Repository<User> {
  private readonly userRepository: Repository<User>;

  public constructor(dataSource: DataSource) {
    super(User, dataSource.manager);

    this.userRepository = dataSource.getRepository(User);
  }

  async findOneBy(queryParams: UserArgs): Promise<User> {
    return this.userRepository.findOneBy(queryParams);
  }

  async add(newUserData: UserInput): Promise<User> {
    return this.userRepository.save(newUserData);
  }
}

export default UserRepository;
