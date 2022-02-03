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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUsedCarsFromApi_1 = __importDefault(require("../services/getUsedCarsFromApi"));
const firstEndpointController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.site || typeof req.query.site !== 'string') {
        /*
            Esta verificación en realidad se hace en el middleware.
            La repito acá solo para demostrar la buena práctica de primero validar el negativo del requisito y retornar error.
        */
        res.status(400).send('El parámetro site es obligatorio en el request y debe ser un string.');
    }
    else {
        const site = req.query.site.toString(); //El parseo a string es opcional y solo evita el clash de tipos de ts.
        try {
            const apiResponse = yield (0, getUsedCarsFromApi_1.default)(site);
            let carList = apiResponse.sort((car1, car2) => {
                return car1.price - car2.price;
            });
            carList = apiResponse.sort((car1, car2) => {
                return parseInt(car2.year.substring(0, 4)) - parseInt(car1.year.substring(0, 4));
            });
            let possibleFilters = {
                city: [],
                state: [],
                brand: [],
                model: []
            };
            apiResponse.forEach((car) => {
                (car.city && !possibleFilters.city.includes(car.city)) && possibleFilters.city.push(car.city);
                (car.state && !possibleFilters.state.includes(car.state)) && possibleFilters.state.push(car.state);
                (car.brand && !possibleFilters.brand.includes(car.brand)) && possibleFilters.brand.push(car.brand);
                (car.model && !possibleFilters.model.includes(car.model)) && possibleFilters.model.push(car.model);
            });
            const response = { items: carList, filters: possibleFilters };
            res.status(200).send(response);
        }
        catch (error) {
            console.log('Error FirstEndpointController', error); //Acá en realidad, reportaríamos el error en vez de loguearlo por consola.
            res.status(500).send('Ocurrió un error al procesar el pedido.');
        }
    }
});
exports.default = firstEndpointController;
