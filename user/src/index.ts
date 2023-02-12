import * as dotenv from 'dotenv';

require('module-alias/register');

import 'reflect-metadata';
import express from 'express';
import configApollo from '@/config/apollo';
import connectToDB from '@/config/typeorm';
import log from '@/config/logger';

dotenv.config();

console.log('hewwow', process.env.POSTGRES_USER);
const main = async () => {
  const app = express();
  configApollo(app);
  connectToDB();

  app.listen(4000, () => { log.info('server started on http://localhost:4000/graphql'); });
};

main();
