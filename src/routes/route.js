import express from 'express'
import router_index from './index.route.js';

const router = express.Router();

router.use('/', router_index);

export default router;