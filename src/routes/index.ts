import express from 'express';
import firstEndpointController from '../controllers/firstEndpointController';

const router = express.Router();

router.get('/firstEndpoint', firstEndpointController);
/* router.get('/secondEndpoint', secondEndpointController); */

export default router;