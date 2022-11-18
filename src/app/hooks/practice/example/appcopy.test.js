import * as app from './app';
import * as math from './math';

/* 
  math.add = jest.fn();
  math.subtract = jest.fn(); 
*/
jest.mock('./math.js');

test('call math add', () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('call math subtract', () => {
  app.doSubtract(5, 4);
  expect(math.subtract).toHaveBeenCalledWith(5, 4);
});
