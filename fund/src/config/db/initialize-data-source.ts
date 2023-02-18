import { Container } from 'typedi';
import { DataSource } from 'typeorm';
import log from '../logger';

const initializeDataSource = async (dataSource: DataSource) => {
  try {
    await dataSource.initialize();
    Container.set(DataSource, dataSource);

    log.info('connected to db');
  } catch (error) {
    log.error('an error occured while connecting to db', error);
  }
};

export default initializeDataSource;
