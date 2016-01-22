// __tests__/test.js
jest.dontMock('../sum');

describe('sum', function() {
 it('adds 1 + 2 to equal 3', function() {
   var sum = require('../sum');
   expect(sum(1, 2)).toBe(3);
 });
});

jest.dontMock('../functions');

describe('eat', function() {
 it('adds type of food to tasted really good string', function() {
   var eat = require('../functions');
   expect(eat('bananas')).toBe('bananas tasted really good.');
 });
});

// __tests__/test.js
jest.dontMock('../accessing-array-values');

describe('access', function() {
 it('should print pizza', function() {
   var access = require('../accessing-array-values');
   expect(access()).toBe('pizza');
 });
});

// __tests__/test.js
jest.dontMock('../array-filtering');

describe('filter_array', function() {
 it('should print even numbers', function() {
   var filter_array = require('../array-filtering');
   expect(filter_array()).toBe([ 2, 4, 6, 8, 10 ] );
 });
});