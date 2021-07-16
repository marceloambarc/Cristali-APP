import { Router } from 'express';

import TokenController from './controllers/TokenController';

const routes = Router();

routes.post('/token', TokenController.create);
routes.get('/token', TokenController.index);

export default routes;