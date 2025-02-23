import { model, Schema } from "mongoose";
import { Icarts, Iorder } from "./orders.interface";

const cartSchema = new Schema<Icarts>(
  {
    items: [
      {
        product: { type: Schema.Types.ObjectId, required: true, ref: "shop" },
        quantity: { type: Number, required: true },
      },
    ],
    userId: { type: String, required: true, ref: "user" },
    quantity: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

const orderSchema = new Schema<Iorder>(
  {
    items: [{ type: Schema.Types.ObjectId, required: true, ref: "shop" }],
    userId: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    total: { type: Number, required: true, default: 0 },
    status: {
      type: String,
      required: true,
      enum: ["pending", "completed"],
      default: "pending",
    },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const cartModel = model<Icarts>("cart", cartSchema);
const orderModel = model<Iorder>("order", orderSchema);
export { cartModel, orderModel };
