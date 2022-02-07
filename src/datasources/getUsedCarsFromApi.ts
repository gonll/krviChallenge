import { AxiosResponse } from "axios";
import { ICar } from "../common/types";
import environment from '../common/environment';

const axios = require('axios').default;

const getUsedCarsFromApi = async (site: string): Promise<any> => {
    const endPoint: string = environment.USED_CARS_API;
    const headers: { 'api-key': string } = { 'api-key': environment.TOKEN_API }; //Estos valores probablemente los deberíamos configurar en el secret del pod si esto no fuera un challenge.

    const axiosConfig = {
        headers: headers,
        params: {
            site: site
        }
    }

    let data: ICar[] = [];
    try {
        const response: AxiosResponse = await axios.get(`${endPoint}`, axiosConfig);
        data = response?.data || [];
    } catch (error) {
        console.log('Error getUsedCarsFromApi service: ', error);  //Acá en realidad, reportaríamos el error en vez de loguearlo por consola.
        throw error;
    }
    return data;
}

export default getUsedCarsFromApi;