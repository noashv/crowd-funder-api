require('module-alias/register');

import 'reflect-metadata';
import express from 'express';
import configApollo from '@/config/apollo';

const main = async () => {
  const app = express();
  configApollo(app);

  app.listen(4000, () => { console.log('server started on http://localhost:4000/graphql'); });
};

main();
