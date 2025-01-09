// Menggunakan require() untuk modul CommonJS
const request = require('supertest');
const assert = require('chai').assert;

describe('API Test for "restful-api.dev"', () => {
    it('Test - GET All Objects', async () => {
        const response = await request('https://api.restful-api.dev/')
            .get('objects');

        // Assertion
        assert.equal(response.statusCode, 200);

        // Log response
        if (response.statusCode === 200) {
            console.log('Test Passed', response.body);
        } else {
            console.log('Test Failed');
        }
    });
});
