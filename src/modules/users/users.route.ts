import { Router } from "express";
import { userController } from "./users.controller";

export const userRoute = Router();

userRoute.post("/register", userController.createUser);
userRoute.get("/users/:id", userController.getSingleUser);
userRoute.post("/login", userController.loginUser);
userRoute.post("/gmailLogin", userController.gmailLogin);
