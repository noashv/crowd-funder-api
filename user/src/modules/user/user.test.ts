/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Repository } from 'typeorm';
import { ApolloServer } from '@apollo/server';
import mockDataSource, { initializeMockDB } from '@/test/mock-db';
import createSchema from '../modules.schema';
import User from './user.entity';

let testServer: ApolloServer;
let userRepository: Repository<User>;

beforeAll(async () => {
  await initializeMockDB();
  userRepository = mockDataSource.getRepository(User);
  const schema = await createSchema();
  testServer = new ApolloServer({
    schema,
  });
});

afterEach(async () => {
  userRepository.clear();
});

afterAll(async () => mockDataSource.destroy());

describe('User', () => {
  it('fetches a user', async () => {
    const user = userRepository.create({
      name: 'gila',
      password: 'gila123',
      email: 'gilag@gmail.com',
    });

    await userRepository.save(user);

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

    /* there is probably a problem in my local env, single result should be
    defined on type but its not */
    // @ts-ignore
    const { singleResult } = response.body;

    expect(response.body.kind).toBe('single');
    expect(singleResult.errors).toBeUndefined();
    expect(singleResult.data.user).toEqual({ email: user.email, name: user.name });
  });

  it('creates a user', async () => {
    const newUser = { name: 'nancy', email: 'nancyshc@gmail.com', password: 'nancyy' };

    const mutation = `
    mutation AddUser($data: UserInput!) {
      addUser(data: $data) {
        email
        name
        password
      }
    }
    `;

    const response = await testServer.executeOperation({
      query: mutation,
      variables: { data: newUser },
    });
      // @ts-ignore
    const { singleResult } = response.body;

    const userSavedInDb = await userRepository.findOneBy(newUser);

    expect(userSavedInDb).toMatchObject(newUser);
    expect(userSavedInDb).toHaveProperty('id');

    expect(response.body.kind).toBe('single');
    expect(singleResult.errors).toBeUndefined();
    expect(singleResult.data.addUser).toEqual(newUser);
  });
});
