import { ObjectId } from "mongoose";

export interface Icomment {
  user: ObjectId;
  name: string;
  text: string;
  postId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
