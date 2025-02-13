import { Schema } from "mongoose";
import { Ipost } from "./posts.interface";

export const postSchema = new Schema<Ipost>(
  {
    author: { type: String, required: true, ref: "user" },
    title: { type: String, required: true },
    subtitle: { type: String, required: true, max: 200, min: 100, trim: true },
    readTime: { type: Number, required: true },
    description: {
      type: String,
      required: true,
      max: 1000,
      min: 400,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["recipe", "lifeStyle"],
    },
    comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    img: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
