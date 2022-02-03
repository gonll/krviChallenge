"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkParams_1 = require("../middlewares/checkParams");
const firstEndpointController_1 = __importDefault(require("../controllers/firstEndpointController"));
const secondEndpointController_1 = __importDefault(require("../controllers/secondEndpointController"));
const router = express_1.default.Router();
router.get('/firstEndpoint', (0, checkParams_1.checkParams)(), firstEndpointController_1.default);
router.get('/secondEndpoint', (0, checkParams_1.checkParams)(), secondEndpointController_1.default);
exports.default = router;
