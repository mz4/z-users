import Request from '../service/request';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

jest.mock('../service/request');

const user = {
  id: 1,
  email: 'george.bluth@reqres.in',
  first_name: 'Georgie',
  last_name: 'Bluth',
  avatar: 'https://reqres.in/img/faces/1-image.jpg'
};

describe('Test useFetch custom hook', () => {
  const url = 'http://localhost:3001/users';
  afterEach(() => jest.resetAllMocks());
  it('Return data from api', async () => {
    Request.prototype.get = jest.fn().mockResolvedValue([user]);
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    expect(result.current.data).toEqual([]);
    act(() => {
      result.current.getData(url);
    });
    await waitForNextUpdate();
    expect(result.current.data).toEqual([user]);
  });
});
