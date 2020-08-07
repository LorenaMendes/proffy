import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControler = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesControler.create);
routes.get('/classes', classesControler.index);
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;