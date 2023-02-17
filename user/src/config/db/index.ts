import * as dotenv from 'dotenv';

import { DataSource } from 'typeorm';
import User from '@/modules/user/user.entity';
import initializeDataSource from './initialize-data-source';

dotenv.config();

const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.DB_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'postgres',
  entities: [User],
  synchronize: true,
  logging: true,
});

export const connectToDB = async () => {
  await initializeDataSource(appDataSource);
};

export default appDataSource;
