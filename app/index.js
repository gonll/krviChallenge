"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get('/', (req, res) => res.status(200).send("It's alive!"));
if (process.env.NODE_ENV !== 'test') {
    //En caso de ser un test, el puerto se asignará a 0 (minimo disponible)
    app.listen(port, () => console.log(`Server running on port ${port}!`));
}
app.use('/', routes_1.default);
exports.default = app;
