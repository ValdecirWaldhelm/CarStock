import { Router } from "express";
import multer from 'multer';
import uploadConfig from './config/upload';

// ROTAS CONTROLLERS
import CarController from "./controllers/CarController";

const routes = new Router();
const upload = multer(uploadConfig);

// CARS     
routes.get('/cars', CarController.index);
// routes.post('/cars', upload.array('fotos', 5), CarController.store); 
routes.post('/cars', upload.array('fotos', ''), CarController.store); 


export default routes;