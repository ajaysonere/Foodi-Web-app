import express from 'express';
import { getPost } from '../controllers/menuController.js';

const menuRouter = express();

menuRouter.get("/" ,getPost);

export default menuRouter;