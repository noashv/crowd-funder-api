require('module-alias/register');

import { connectToDB } from '@/config/db';
import seedFund from './fund/fund.seed';
import log from '@/config/logger';

const seedModules = async () => {
  try {
    await connectToDB();
    await Promise.all([seedFund()]);

    log.info('modules seeded');
  } catch (error) {
    log.error('an error occurred while seeding the db', error);
  }
};

seedModules();
