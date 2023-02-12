import * as dotenv from 'dotenv';

require('module-alias/register');

import 'reflect-metadata';
import express from 'express';
import configApollo from '@/config/apollo';
import { connectToDB } from '@/config/db';
import log from '@/config/logger';
import seedUser from './modules/user/user.seed';

dotenv.config();

const main = async () => {
  const app = express();
  configApollo(app);
  await connectToDB();
  await seedUser();

  app.listen(4000, () => { log.info('server started on http://localhost:4000/graphql'); });
};

main();
