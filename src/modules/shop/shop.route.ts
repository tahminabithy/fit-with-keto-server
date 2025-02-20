import { Router } from "express";
import { shopController } from "./shop.controller";

export const shopRouter = Router();
shopRouter.post("/shops", shopController.createShop);
shopRouter.get("/shops", shopController.getAllShops);
shopRouter.get("/shops/:id", shopController.getSingleShop);
