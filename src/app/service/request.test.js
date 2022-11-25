import { GET, USERS_ENDPOINT } from '../constants/constants';
import Request from './request';

const unmockedFetch = global.fetch;
const dataReturned = [{ id: 1, first_name: 'John' }];

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(dataReturned)
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('Test useClickOutside custom hook', () => {
  it('Call handler', async () => {
    const req = new Request(null, USERS_ENDPOINT, GET);
    const data = await req.get();
    expect(data).toEqual(dataReturned);
  });
});
