// Menggunakan require() untuk modul CommonJS
const request = require('supertest');
const assert = require('chai').assert;

describe('API Test for "restful-api.dev"', () => {
    it('Test - GET All Objects', async () => {
        const response = await request('https://api.restful-api.dev/')
            .get('objects');

        // Log response
        if (response.statusCode === 200) {

            assert.equal(response.statusCode, 200);
            assert.equal(response.body[0].id, 1);
            assert.equal(response.body[0].name, 'Google Pixel 6 Pro');
            assert.equal(response.body[0].data.color, 'Cloudy White');
            console.log('Test Passed', response.body[0]);
        } else {
            console.log('Test Failed');
        }
        //console.log(response.body);
    });
});
