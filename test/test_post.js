const request = require('supertest');
var chai = require('chai');
chai.use(require('chai-json-schema'));
const assert = chai.assert;
const fs = require('fs');



describe('API Test for "restful-api.dev"', () => {
    it('Test - POST New Object', async () => {
            const body = {
               
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            };

        const response = await request('https://api.restful-api.dev/')
        .post('objects')
        .send(body);
        console.log(response.statusCode);
        
        // Assertion
        if (response.statusCode === 200) {
            console.log('Test Passed', response.body);
        } else {
            console.log('Test Failed');
        }

        const schemaPath = './resources/jsonSchema/post-object-schema.json';
        const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

        assert.jsonSchema(response.body, jsonSchema);
    });
});