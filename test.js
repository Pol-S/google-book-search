
const checkQuery = require('./views/pages/interface');
const callApi = require('./views/pages/interface');
const bookInfo = require('./views/pages/interface');


test('that a query of all blank spaces throws an alert', () => {
  expect(checkQuery(' ')).toBeTruthy();
});

describe('checkQuery', () => {
  test('query is formatted correctly, results will be processed', () => {
    const callApi = jest.fn();
    checkQuery(callApi(), 'test');
    expect(callApi()).toBeCalled();  
  });
});



