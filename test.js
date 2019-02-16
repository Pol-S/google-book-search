
const checkQuery = require('./views/pages/interface');
const callApi = require('./views/pages/interface');
const bookInfo = require('./views/pages/interface');
const buttonSwap = require('./views/pages/interface');


test('A query of all blank spaces throws an alert', () => {
  expect(checkQuery(' ')).toBeTruthy();
});

test('If query is formatted correctly, a call will be made', () => {
  expect(checkQuery('test')).toBeTruthy();
});




