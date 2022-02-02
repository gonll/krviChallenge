import request from 'supertest';
import server from '../../src/index';

describe('Testing the first controller of this challenge', () => {
    test('It should return a 200 status code', async () => {
        return request(server).get('/firstEndpoint').query({ site: 'br' })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(typeof response.text).toBe('string');
            })
    });
})

describe('Testing the second controller  of this challenge', () => {
    test('It should return a 200 status code', async () => {
        return request(server).get('/secondEndpoint').query({ site: 'br', ids: '1,2,3' })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(typeof response.text).toBe('string');
            })
    });
})