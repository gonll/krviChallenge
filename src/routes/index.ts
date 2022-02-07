import express from 'express';
import { checkParams } from '../middlewares/checkParams';
import carsBySiteController from '../controllers/carsBySiteController';
import carsBySiteIdsController from '../controllers/carsBySiteIdsController';

const router = express.Router();

router.get('/carsBySite', checkParams(), carsBySiteController);
router.get('/carsBySiteIds', checkParams(), carsBySiteIdsController);

export default router;