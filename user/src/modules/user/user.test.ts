import { ApolloServer } from '@apollo/server';
import mockDataSource, { connectToMockDB } from '@/test/mock-db';
import createSchema from '../modules.schema';
import User from './user.entity';

beforeAll(async () => {
  await connectToMockDB();
});

afterAll(async () => mockDataSource.destroy());

describe('User', () => {
  it('does stuff', async () => {
    const schema = await createSchema();

    const userRepository = mockDataSource.getRepository(User);

    const defaultUser = userRepository.create({
      name: 'gila',
      password: 'gila123',
      email: 'gilag@gmail.com',
    });

    await userRepository.save(defaultUser);

    const testServer = new ApolloServer({
      schema,
    });

    const query = `
    query User($name: String) {
        user(name: $name) {
          email
          name
        }
      }      
    `;

    const response = await testServer.executeOperation({
      query,
      variables: { name: 'gila' },
    });

    console.log('res', response.body);
    // assert(body.kind === 'single');
    // expect(response.body).toBeUndefined();
    // expect(response.body.singleResult.data?.hello).toBe('Hello world!');
  });
});
