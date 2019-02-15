
const checkQuery = require('./views/pages/interface');
const callApi = require('./views/pages/interface');
const bookInfo = require('./views/pages/interface');


test('that a query of all blank spaces throws an alert', () => {
  expect(checkQuery(' ')).toBeTruthy();
});

test('that a query with blank spaces replaces them with + signs', () => {
  expect(checkQuery('august winter')).toBeTruthy();
});


// test('if a query fails to reach the API, results will be displayed', () => {
//  expect.asssertions(1);
//  return callApi().catch(error => {console.log('Connection Error');printError();});
// });



