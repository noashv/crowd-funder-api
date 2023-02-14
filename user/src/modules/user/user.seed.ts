import appDataSource from '@/config/db';
import User from './user.type';

const seedUser = async () => {
  const userRepository = appDataSource.getRepository(User);

  const defaultUser = userRepository.create({
    name: 'gila',
    password: 'gila123',
    email: 'gilag@gmail.com',
  });

  return userRepository.save(defaultUser);
};

export default seedUser;
