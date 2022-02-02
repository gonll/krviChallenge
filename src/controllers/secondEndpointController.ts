import { Request, Response } from "express";
import { ICar } from "../common/Types";
import getUsedCarsFromApi from "../services/getUsedCarsFromApi";

const secondEndpointController = async (req: Request, res: Response) => {
    if (!req.query.site || typeof req.query.site !== 'string' || !req.query.ids) {
        /* 
            Esta verificación en realidad se hace en el middleware.
            La repito acá solo para demostrar la buena práctica de primero validar el negativo del requisito y retornar error.
        */
        res.status(400).send('Los parámetros site y ids son obligatorios en el request y deben ser de tipo string.');
    } else {
        const site: string = req.query.site.toString(); //El parseo a string es opcional y solo evita el clash de tipos de ts.
        const ids: string[] = req.query.ids.toString().split(',');
        try {
            let response: ICar[] = await getUsedCarsFromApi(site);
            response = response.filter((car: ICar) => car.id && ids.includes((car.id.toString())));
            res.status(200).send(response);
        } catch (error) {
            console.log('Error secondEndpointController', error);  //Acá en realidad, reportaríamos el error en vez de loguearlo por consola.
            res.status(500).send('Ocurrió un error al procesar el pedido.');
        }
    }
}

export default secondEndpointController;