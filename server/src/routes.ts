import { Router } from 'express';

import AcessoController from './controllers/AcessoController';
import TokenController from './controllers/TokenController';
import ClientController from './controllers/ClientController';
import OrderController from './controllers/OrderController';

const routes = Router();

routes.post('/token', TokenController.create);
routes.get('/token', TokenController.index);

routes.get('/client', ClientController.index);
routes.post('/client', ClientController.create);
routes.put('/client', ClientController.edit);

routes.get('/order', OrderController.index);
routes.post('/order', OrderController.create);
routes.delete('/order', OrderController.delete);
routes.put('/order', OrderController.edit);

routes.get('/acesso', AcessoController.index);
routes.post('/login', AcessoController.login);
routes.post('/acesso', AcessoController.create);


export default routes;