import getUsedCarsFromApi from '../../src/services/getUsedCarsFromApi';
const axios = require('axios');
require('dotenv').config();

jest.mock('axios');

const mockReq: string = 'br';

axios.get.mockResolvedValue({
    data:
    [
        {
            "id": 22627843340,
            "city": "Almirante Brown",
            "state": "Buenos Aires",
            "year": "2021",
            "brand": "Peugeot",
            "model": "208",
            "version": "1.6 5p Active",
            "price": 2627800,
            "mileage": 15,
            "image": "https://karvi-certified-images-dev-ar.s3.amazonaws.com/1gcn1Z2jec6bYifEwdZXZCzHP_-h7KPW9.jpg",
            "certificate": true,
            "promoted": false
        }
    ]
})
 
describe('Testing getUsedCarsFromApi service', () => {
    test('It should return a 200 status code', async () => {
        const res = await getUsedCarsFromApi(mockReq);
        expect(typeof res).toEqual('object');
        expect(res[0]).not.toBe(null || undefined);
        expect(res[0].id).not.toBe(null || undefined);
    });
});