require('module-alias/register');

import { connectToDB } from '@/config/db';
import seedUser from './user/user.seed';
import log from '@/config/logger';

const seedModules = async () => {
  try {
    await connectToDB();
    await Promise.all([seedUser()]);

    log.info('modules seeded');
  } catch (error) {
    log.error('an error occurred while seeding the db', error);
  }
};

seedModules();
