import averageService from './averageService';

test('renders learn react link', () => {
  expect(averageService(3, 4)).toEqual(7);
});

test('renders learn react link', () => {
  expect(averageService(4, 2)).toEqual(6);
});

