import { Request, Response } from "express";
import getCarsBySiteService from '../services/getCarsBySiteService';

const carsBySiteController = async (req: Request, res: Response) => {
    if (!req.query.site) {
        /* 
            Esta verificación en realidad se hace en el middleware.
            La repito acá solo para demostrar la buena práctica de primero validar el negativo del requisito y retornar error.
        */
        res.status(400).send('El parámetro site es obligatorio en el request y debe ser un string.');
    } else {
        getCarsBySiteService(req, res);
    }
}

export default carsBySiteController;