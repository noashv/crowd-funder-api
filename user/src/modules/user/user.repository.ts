import { Repository } from 'typeorm';
import appDataSource from '@/config/db';
import User from './user.entity';
import { UserArgs, UserInput } from './user.args';

class UserRepository {
  private userRepository: Repository<User> = appDataSource.getRepository(User);

  async findOneBy(queryParams: UserArgs): Promise<User> {
    return this.userRepository.findOneBy(queryParams);
  }

  async save(newUserData: UserInput): Promise<User> {
    return this.userRepository.save(newUserData);
  }
}

export default UserRepository;
