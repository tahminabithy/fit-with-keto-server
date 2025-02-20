import { model, Schema } from "mongoose";
import { Ishop } from "./shop.interface";

const shopSchema = new Schema<Ishop>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const shopModel = model<Ishop>("shop", shopSchema);
export default shopModel;
