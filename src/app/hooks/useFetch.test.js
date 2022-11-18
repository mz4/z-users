import Request from '../service/request';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

jest.mock('../service/request');

describe('Test useFetch custom hook', () => {
  const url = 'http://localhost:3001/users';
  afterEach(() => jest.resetAllMocks());
  it('Return data from api', async () => {
    const mockGet = jest.fn().mockResolvedValue([{ id: 1 }]);
    Request.prototype.get = await mockGet();
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
    expect(result.current.data).toEqual([]);
    act(() => {
      result.current.getData(url);
    });
    await waitForNextUpdate();
    const ao = result.current.data;
    expect(ao).toEqual([]);
  });
});
