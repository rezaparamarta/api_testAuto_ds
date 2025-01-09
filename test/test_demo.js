// const {response} = require('supertest');

describe('demo test-suite 1', () => {
    it('test case 1', () => {
        console.log('Ini hasil test');
    });
    it('test case 2', () => {
        console.log('Ini hasil test');
    });
    describe('demo test-suite 2', () => {
        it('test case 3', () => {
            console.log('Ini hasil test');
        });
    });
});

describe('Demo test-suite 3', () => {
  it('Test case 4', () => {
      console.log('Ini hasil test');
  });
});