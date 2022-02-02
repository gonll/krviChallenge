import express from 'express';
import { NextFunction } from 'express';
import {checkParams} from '../middlewares/checkParams';
import firstEndpointController from '../controllers/firstEndpointController';
import secondEndpointController from '../controllers/secondEndpointController';

const router = express.Router();

router.get('/firstEndpoint', checkParams(), firstEndpointController);
router.get('/secondEndpoint', checkParams() , secondEndpointController);

export default router;