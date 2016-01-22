// __tests__/function-test.js
jest.dontMock('../functions');

describe('eat', function() {
 it('adds type of food to tasted really good string', function() {
   var eat = require('../functions');
   expect(eat('bananas')).toBe('bananas tasted really good.');
 });
});