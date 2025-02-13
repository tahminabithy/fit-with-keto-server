"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
exports.userRoute = (0, express_1.Router)();
exports.userRoute.post("/register", users_controller_1.userController.createUser);
exports.userRoute.get("/users/:id", users_controller_1.userController.getSingleUser);
