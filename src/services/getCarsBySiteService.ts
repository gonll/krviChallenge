import { Request, Response } from "express";
import { ICar } from "../common/types";
import getUsedCarsFromApi from "../datasources/getUsedCarsFromApi";
import { IPossibleFilters } from '../controllers/types'

const getCarsBySiteService = async (req: Request, res: Response) => {
    if (!req.query.site || typeof req.query.site !== 'string') {
        /* 
            Esta verificación en realidad se hace en el middleware.
            La repito acá solo para demostrar la buena práctica de primero validar el negativo del requisito y retornar error.
        */
        res.status(400).send('El parámetro site es obligatorio en el request y debe ser un string.');
    } else {
        const site: string = req.query.site.toString(); //El parseo a string es opcional y solo evita el clash de tipos de ts.
        try {
            const apiResponse: ICar[] = await getUsedCarsFromApi(site);

            let carList: ICar[] = apiResponse.sort((car1: any, car2: any) => car1.price - car2.price);
            carList = apiResponse.sort((car1: any, car2: any) => parseInt(car2.year.substring(0, 4)) - parseInt(car1.year.substring(0, 4)));

            let possibleFilters: IPossibleFilters = {
                city: [],
                state: [],
                brand: [],
                model: []
            }
            apiResponse.forEach((car: ICar) => {
                (car.city && !possibleFilters.city.includes(car.city)) && possibleFilters.city.push(car.city);
                (car.state && !possibleFilters.state.includes(car.state)) && possibleFilters.state.push(car.state);
                (car.brand && !possibleFilters.brand.includes(car.brand)) && possibleFilters.brand.push(car.brand);
                (car.model && !possibleFilters.model.includes(car.model)) && possibleFilters.model.push(car.model);
            })

            const response = { items: carList, filters: possibleFilters };
            res.status(200).send(response);
        } catch (error) {
            console.log('Error getCarsBySiteService', error);  //Acá en realidad, reportaríamos el error en vez de loguearlo por consola.
            res.status(500).send('Ocurrió un error al procesar el pedido.');
        }
    }
}

export default getCarsBySiteService;