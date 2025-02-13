import { Router } from "express";
import { commentController } from "./comments.controller";

export const commentsRoute = Router();

commentsRoute.post("/comments", commentController.createComment);
// commentsRoute.get("/comments", commentController.getComments);
