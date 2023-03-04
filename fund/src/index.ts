import * as dotenv from 'dotenv';

require('module-alias/register');

import 'reflect-metadata';
import express from 'express';
import configApollo from '@/config/apollo';
import { connectToDB } from '@/config/db';
import log from '@/config/logger';

dotenv.config();

const main = async () => {
  const app = express();
  configApollo(app);
  await connectToDB();

  app.listen(process.env.PORT, () => { log.info(`server started on http://localhost:${process.env.PORT}/graphql`); });
};

main();
