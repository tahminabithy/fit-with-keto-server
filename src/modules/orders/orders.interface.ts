import { ObjectId } from "mongoose";

interface IcartItems {
  product: ObjectId;
  quantity: number;
}
export interface Icarts {
  items: IcartItems[];
  userId: string;
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
