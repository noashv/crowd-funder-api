import appDataSource from '@/config/db';
import log from '@/config/logger';
import User from './user.entity';

const seedUser = async () => {
  const userRepository = appDataSource.getRepository(User);

  const defaultUser = userRepository.create({
    name: 'gila',
    password: 'gila123',
    email: 'gilag@gmail.com',
  });

  await userRepository.save(defaultUser);

  log.info('user seeded');
};

export default seedUser;
