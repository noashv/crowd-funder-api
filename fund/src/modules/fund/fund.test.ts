/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Repository } from 'typeorm';
import { ApolloServer } from '@apollo/server';
import mockDataSource from '@/test/mock-dbsata-source';
import initializeDataSource from '@/config/db/initialize-data-source';
import createSchema from '../modules.schema';
import Fund, { FundStatus } from './fund.entity';

let testServer: ApolloServer;
let fundRepository: Repository<Fund>;

beforeAll(async () => {
  await initializeDataSource(mockDataSource);
  fundRepository = mockDataSource.getRepository(Fund);
  const schema = await createSchema();
  testServer = new ApolloServer({
    schema,
  });
});

afterEach(async () => {
  // fundRepository.clear();
});

afterAll(async () => mockDataSource.destroy());

describe('Fund', () => {
  it('fetches a fund', async () => {
    const fund = fundRepository.create({
      name: 'coffe cups in memory of Gila',
      description: 'help us make coffe cups in memory of Gila Goldstien',
      endGoal: 100,
      deadline: new Date(),
      status: FundStatus.Unset,
      userId: '1',
    });

    await fundRepository.save(fund);

    const query = `
    query Fund($name: String) {
        fund(name: $name) {
          name
          description
          endGoal
        }
      }      
    `;

    const response = await testServer.executeOperation({
      query,
      variables: { name: 'coffe cups in memory of Gila' },
    });

    /* there is probably a problem in my local env, single result should be
    defined on type but its not */
    // @ts-ignore
    const { singleResult } = response.body;

    expect(response.body.kind).toBe('single');
    expect(singleResult.errors).toBeUndefined();
    expect(singleResult.data.fund).toEqual(
      { name: fund.name, description: fund.description, endGoal: fund.endGoal },
    );
  });

  it('creates a fund', async () => {
    const newFund = {
      name: 'growing my 80s garfield plush collection',
      description: 'the title says it all',
      endGoal: 4000,
      deadline: '2023-02-20 15:53:09.588',
      status: FundStatus.Unset,
      userId: '1',
    };

    const mutation = `
    mutation AddFund($data: FundInput!) {
      addFund(data: $data) {
        name
        description
        endGoal
        deadline
        status
        userId
      }
    }
    `;

    const response = await testServer.executeOperation({
      query: mutation,
      variables: { data: newFund },
    });
      // @ts-ignore
    const { singleResult } = response.body;

    const funds = await fundRepository.find();
    console.log('ADSADSD', funds);
    const fundSavedInDb = await fundRepository.findOneBy({ endGoal: newFund.endGoal });

    expect(fundSavedInDb).toMatchObject(newFund);
    expect(fundSavedInDb).toHaveProperty('id');

    expect(response.body.kind).toBe('single');
    expect(singleResult.errors).toBeUndefined();
    expect(singleResult.data.addUser).toEqual(fundSavedInDb);
  });
});
