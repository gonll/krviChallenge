import { Request, Response, NextFunction } from 'express';

/*
    Este middleware es un poco innecesario considerando que al tener solo dos rutas, 
    tranquilamente podríamos validar los parámetros ahí mismo.
    Pero este esquema es mas escalable.

    Por otro lado, en lugar de un switch quizás deberíamos definir las rutas en un array de objetos, con sus métodos y parámetros esperados.
    Luego acá solo recorreríamos ese array y validamos los parámetros. Pero me parece over-engineering para este challenge.
*/

export const checkParams = ()=> 
    (req: Request, res: Response, next: NextFunction) => {
        switch (req.route.path){
            case '/firstEndpoint':
                Object.keys(req.query).includes('site') ? next() : res.status(400).send('Missing site parameter');
                break;
            case '/secondEndpoint':
                (Object.keys(req.query).includes('site') && Object.keys(req.query).includes('ids')) ? next() : res.status(400).send('Los parámetros site y ids son obligatorios en el request y deben ser de tipo string.');
                break;
            default:
                break;
        }
    }
    