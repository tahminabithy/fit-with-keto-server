import { Router } from "express";
import { postController } from "./posts.controller";

export const postRoute = Router();

postRoute.post("/posts", postController.createPost);
postRoute.get("/posts", postController.getPosts);
postRoute.get("/posts/:id", postController.getSinglePost);
// postRoute.get("/postsByType", postController.getPostsByType);
