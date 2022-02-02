import { AxiosResponse } from "axios";
import { IEnpointResponse } from "./Types";

const axios = require('axios').default;

const getUsedCarsFromApi = async (site: string): Promise<any> => {
    const endPoint = process.env.USED_CARS_API || 'https://used-cars-api.development.karvi.com.ar/cars/challenge';
    const headers = { 'api-key': process.env.TOKEN_API || '826b5e6c-49cc-4362-a0e3-658dc20fdbf2' }; //Estos valores probablemente los deberíamos configurar en el secret del pod si esto no fuera un challenge.

    const axiosConfig = {
        headers: headers,
        params: {
            site: site
        }
    }

    const response: AxiosResponse = await axios.get(`${endPoint}`, axiosConfig)
        .catch((error: { origin: string }) => {
            console.log('Error getUsedCarsFromApi service: ', error);  //Acá en realidad, reportaríamos el error en vez de loguearlo por consola.
            throw error;
        })
    const data: IEnpointResponse[] = response.data;

    return data;
}

export default getUsedCarsFromApi;