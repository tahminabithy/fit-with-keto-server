import { ObjectId } from "mongoose";

export interface Ipost {
  author: ObjectId;
  title: string;
  subtitle: string;
  readTime: number;
  description: string;
  type: "recipe" | "lifeStyle";
  comment?: ObjectId[];
  img: string;
  createdAt: Date;
  updatedAt: Date;
}
