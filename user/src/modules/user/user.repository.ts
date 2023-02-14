import { Repository } from 'typeorm';
import appDataSource from '@/config/db';
import User from './user.type';
import UserArgs from './user.args';

class UserRepository {
  private userRepository: Repository<User> = appDataSource.getRepository(User);

  async findOneBy(queryParams: UserArgs) {
    return this.userRepository.findOneBy(queryParams);
  }
}

export default UserRepository;
