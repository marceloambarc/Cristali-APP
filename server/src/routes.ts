import { Router } from 'express';

import AcessoController from './controllers/AcessoController';
import TokenController from './controllers/TokenController';
import ClientController from './controllers/ClientController';
import OrderController from './controllers/OrderController';

const routes = Router();

routes.post('/token', TokenController.create);
routes.get('/token', TokenController.index);

routes.get('/client', ClientController.index);
routes.get('/client/:id', ClientController.show);

routes.get('/order', OrderController.index);
routes.get('/order/:id', OrderController.show);
routes.post('/order', OrderController.create);
routes.delete('/order', OrderController.delete);

routes.get('/acesso', AcessoController.index);
routes.post('/login', AcessoController.login);
routes.post('/acesso', AcessoController.create);
routes.put('/acesso/:cgce', AcessoController.edit);


export default routes;