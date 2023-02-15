import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import log from '@/config/logger';
import User from '@/modules/user/user.entity';

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
  try {
    await appDataSource.initialize();

    log.info('connected to db');
  } catch (error) {
    log.error('an error occured while connecting to db', error);
  }
};

export default appDataSource;
