import { Router } from "express";
import { orderController } from "./orders.contoller";

export const orderRoute = Router();
orderRoute.post("/add-to-cart", orderController.addToCart);
orderRoute.get("/get-cart/:id", orderController.getCart);
orderRoute.post("/remove-from-cart", orderController.deleteCart);
