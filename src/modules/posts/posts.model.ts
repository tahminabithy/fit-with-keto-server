import { model } from "mongoose";
import { Ipost } from "./posts.interface";
import { postSchema } from "./posts.schema";

export const postModel = model<Ipost>("post", postSchema);
