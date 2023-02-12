import { DataSource } from 'typeorm';
import log from '@/config/logger';

const connectToDB = async () => {
  try {
    const AppDataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.DB_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'postgres',
    });

    AppDataSource.initialize();

    log.info('connected to db');
  } catch (error) {
    log.error('an error occured while connecting to db', error);
  }
};

export default connectToDB;
