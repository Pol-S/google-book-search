
const checkQuery = require('./views/pages/interface');
const callApi = require('./views/pages/interface');
const bookInfo = require('./views/pages/interface');


test('that a query of all blank spaces throws an alert', () => {
  expect(checkQuery(' ')).toBeTruthy();
});

describe('checkQuery', () => {
  test('query is formatted correctly, a call will be made', () => {
    const callApi = jest.fn();
    checkQuery(callApi, 'test');
    expect(callApi).toHaveBeenCalled();  
  });

  test('query is formatted incorrectly, a call will not be made', () => {
    const callApi = jest.fn();
    checkQuery(callApi, ' ');
    expect(callApi).not.toHaveBeenCalled();  
  });
});



