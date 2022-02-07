import { Request, Response } from "express";
import getCarsBySiteIdsService from '../services/getCarsBySiteIdsService';

const carsBySiteIds = async (req: Request, res: Response) => {
    if (!req.query.site || typeof req.query.site !== 'string' || !req.query.ids) {
        /* 
            Esta verificación en realidad se hace en el middleware.
            La repito acá solo para demostrar la buena práctica de primero validar el negativo del requisito y retornar error.
        */
        res.status(400).send('Los parámetros site y ids son obligatorios en el request y deben ser de tipo string.');
    } else {
        getCarsBySiteIdsService(req, res);
    }
}

export default carsBySiteIds;