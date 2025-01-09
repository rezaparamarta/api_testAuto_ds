const request = require('supertest');

describe('API Test for "restful-api.dev"', () => {
    it('Test - GET All Objects', async () => {
        const response = await request('https://api.restful-api.dev/')
        .get('objects');
        console.log(response.statusCode);
        
        // Assertion
        if (response.statusCode === 200) {
            console.log('Test Passed', response.body);
        } else {
            console.log('Test Failed');
        }
    });
});