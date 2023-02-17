import * as dotenv from 'dotenv';

import { Container } from 'typedi';
import { DataSource } from 'typeorm';
import log from '@/config/logger';
import User from '@/modules/user/user.entity';

dotenv.config();

const mockDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.TEST_DB_PORT),
  username: process.env.TEST_POSTGRES_USER,
  password: process.env.TEST_POSTGRES_PASSWORD,
  database: 'postgres',
  entities: [User],
  synchronize: true,
  dropSchema: true,
});

export const initializeMockDB = async () => {
  try {
    // will drop the schema on every call:
    await mockDataSource.initialize();
    Container.set(DataSource, mockDataSource);
  } catch (error) {
    log.error('an error occured while connecting to db', error);
  }
};

export default mockDataSource;
