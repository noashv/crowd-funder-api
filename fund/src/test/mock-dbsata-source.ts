import * as dotenv from 'dotenv';

import { DataSource } from 'typeorm';
import User from '@/modules/fund/fund.entity';

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

export default mockDataSource;
