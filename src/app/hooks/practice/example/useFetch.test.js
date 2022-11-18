import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

const stubbedCountries = [
  { name: 'Slovakia', capital: 'Bratislava' },
  { name: 'Germany', capital: 'Berlin' }
];
const stubbedFetchUrl = 'api/countriesUrl-mocked';

afterEach(() => {
  global.fetch.mockClear();
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe('useFetch', () => {
  it('should return data after fetch', async () => {
    // Mock API
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(stubbedCountries) })
      );

    // Execute
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(stubbedFetchUrl, { current: true }, [])
    );
    await waitForNextUpdate();

    // Assert
    expect(result.current).toStrictEqual({
      loading: false,
      data: stubbedCountries,
      error: null
    });
  });
});
