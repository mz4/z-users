test('try mock function', () => {
  const mock = jest.fn();
  const result = mock('foo');

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith('foo');
});

test('mock implementation', () => {
  const mock = jest.fn(() => 'bar');

  expect(mock('foo')).toBe('bar');
  expect(mock).toHaveBeenCalledWith('foo');
});

test('mock implementation alternative syntax', () => {
  const mock = jest.fn().mockImplementation(() => 'bar');

  expect(mock('foo')).toBe('bar');
  expect(mock).toHaveBeenCalledWith('foo');
});

test('mock return value', () => {
  const mock = jest.fn();
  mock.mockReturnValue('bar');

  expect(mock('foo')).toBe('bar');
  expect(mock).toHaveBeenCalledWith('foo');
});

test('mock promise resolution', async () => {
  const mock = jest.fn();
  mock.mockResolvedValue('bar');
  const res = await mock('foo');
  expect(res).toBe('bar');
  expect(mock).toHaveBeenCalledWith('foo');
});

test('calls callback with arguments added', () => {
  const doAdd = (a, b, callback) => {
    callback(a + b);
  };
  const mockCallBack = jest.fn();
  doAdd(1, 2, mockCallBack);
  expect(mockCallBack).toHaveBeenCalledWith(3);
});
