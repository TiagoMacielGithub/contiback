import { Router } from "express";
import UserController from "../controller/user.controller";

const routes = Router();


routes.post('/signUp', new UserController().signUpUser);

export default routes;
