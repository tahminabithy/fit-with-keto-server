import { model, Schema } from "mongoose";
import { Iusers } from "./users.interface";

const userSchema = new Schema<Iusers>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
    password: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

export const Users = model<Iusers>("user", userSchema);
