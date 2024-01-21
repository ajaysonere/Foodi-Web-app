import express from 'express';
import { createMenu, getAllRecipes } from "../controllers/menuController.js";

const menuRouter = express();

menuRouter.get("/menu" ,getAllRecipes);
menuRouter.post("/menu" , createMenu);

export default menuRouter;