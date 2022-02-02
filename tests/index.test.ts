import request from 'supertest';
import server from '../src/index';

describe('Testing the root of this challenge', () => {
    test('It should return a 200 status code', async () => {
        return request(server).get('/')
        .then(response => {
            expect(response.status).toBe(200);
        })
    });
})