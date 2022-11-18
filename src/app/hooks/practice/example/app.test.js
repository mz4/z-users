import * as app from './app';
import * as math from './math';

test('spy on add method to have been called', () => {
  const addMock = jest.spyOn(math, 'add');

  expect(app.doAdd(1, 2)).toEqual(3);
  expect(addMock).toHaveBeenCalledWith(1, 2);

  addMock.mockImplementation(() => 25735);
  expect(app.doAdd(1, 2)).toEqual(25735);

  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});
