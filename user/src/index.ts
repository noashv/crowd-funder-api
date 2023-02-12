require('module-alias/register');

import 'reflect-metadata';
import express from 'express';
import configApollo from '@/config/apollo';
import log from '@/config/logger';

const main = async () => {
  const app = express();
  configApollo(app);

  app.listen(4000, () => { log.info('server started on http://localhost:4000/graphql'); });
};

main();
