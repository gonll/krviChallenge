import { Request, Response } from "express";
import getUsedCarsFromApi from "../services/getUsedCarsFromApi";

const firstEndpointController = async (req: Request, res: Response) => {
    if(!req.query.site || typeof req.query.site !== 'string') {
        /* 
            Esta verificación en realidad se hace en el middleware.
            La repito acá solo para demostrar la buena práctica de primero validar el negativo del requisito y retornar error.
        */ 
        res.status(400).send('El parámetro site es obligatorio en el request y debe ser un string.');
    }else{
        const site: string = req.query.site.toString(); //El parseo a string es opcional y solo evita el clash de tipos de ts.
        try {
            const response = await getUsedCarsFromApi(site);
            console.log("🚀 ~ file: firstEndpointController.ts ~ line 15 ~ response", response)
            res.status(200).send(response);
        } catch (error) {
            console.log('Error FirstEndpointController',error);  //Acá en realidad, reportaríamos el error en vez de loguearlo por consola.
            res.status(500).send('Ocurrió un error al procesar el pedido.');
        }
    }
}

export default firstEndpointController;