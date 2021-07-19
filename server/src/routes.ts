import { Router } from 'express';

import AcessoController from './controllers/AcessoController';
import TokenController from './controllers/TokenController';

const routes = Router();

routes.post('/token', TokenController.create);
routes.get('/token', TokenController.index);

routes.post('/login', AcessoController.login);
routes.post('/acesso', AcessoController.create);
routes.get('/acesso', AcessoController.index);

export default routes;