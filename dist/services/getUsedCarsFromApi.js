"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios').default;
const getUsedCarsFromApi = (site) => __awaiter(void 0, void 0, void 0, function* () {
    const endPoint = process.env.USED_CARS_API || 'https://used-cars-api.development.karvi.com.ar/cars/challenge';
    const headers = { 'api-key': process.env.TOKEN_API || '826b5e6c-49cc-4362-a0e3-658dc20fdbf2' }; //Estos valores probablemente los deberíamos configurar en el secret del pod si esto no fuera un challenge.
    const axiosConfig = {
        headers: headers,
        params: {
            site: site
        }
    };
    let data = [];
    try {
        const response = yield axios.get(`${endPoint}`, axiosConfig);
        data = (response === null || response === void 0 ? void 0 : response.data) || [];
    }
    catch (error) {
        console.log('Error getUsedCarsFromApi service: ', error); //Acá en realidad, reportaríamos el error en vez de loguearlo por consola.
        throw error;
    }
    return data;
});
exports.default = getUsedCarsFromApi;
