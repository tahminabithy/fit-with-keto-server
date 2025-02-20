import { ObjectId } from "mongoose";

export interface Icarts {
  items: ObjectId[];
  userId: ObjectId;
  quantity: number;
  total: number;
}
export interface Iorder {
  items: ObjectId[];
  userId: ObjectId;
  total: number;
  status: "pending" | "completed";
  quantity: number;
}
