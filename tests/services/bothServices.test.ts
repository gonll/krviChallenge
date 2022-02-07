import { json } from 'express';
import request from 'supertest';
import { ICar } from '../../src/common/types';
import server from '../../src/index';

describe('Testing the first controller of this challenge', () => {
    test('It should return a 200 status code', async () => {
        return request(server).get('/carsBySite').query({ site: 'br' })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(typeof response.text).toBe('string');

                //Ahora evaluamos el orden de la respuesta:
                if (response.text.length) {
                    let parsedResponse = JSON.parse(response.text);
                    parsedResponse?.items?.length > 1 &&
                        //Controlo orden de años de items.
                        expect(parseInt(parsedResponse.items[0].year.substring(0, 4))).toBeLessThanOrEqual(parseInt(parsedResponse.items[1].year.substring(0, 4)));
                        
                        //Controlo orden de precio de items.
                        expect(
                            (parseInt(parsedResponse.items[0].year.substring(0, 4)) === parseInt(parsedResponse.items[1].year.substring(0, 4)) && parsedResponse.items[0].price < parsedResponse.items[1].price)
                            ||
                            (parseInt(parsedResponse.items[0].year.substring(0, 4)) !== parseInt(parsedResponse.items[1].year.substring(0, 4)))
                        ).toBeTruthy();
                }
            })
    });
})

describe('Testing the second controller  of this challenge', () => {
    test('It should return a 200 status code', async () => {
        const reqIds = '1,366383,3';
        return request(server).get('/carsBySiteIds').query({ site: 'br', ids: reqIds })
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(typeof response.text).toBe('string');

                //Ahora evaluamos que si la respuesta tiene valores, estos tengan los ids solicitados
                if (response.text.length) {
                    let parsedResponse = JSON.parse(response.text);
                    parsedResponse?.items?.length > 0 &&
                        expect(parsedResponse.items.map((item: ICar) => item.id).some((responseId: string) => reqIds.split(',').includes(responseId))).toBeTruthy();
                }
            })
    });
})