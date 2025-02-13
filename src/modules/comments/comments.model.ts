import { model, Schema } from "mongoose";
import { Icomment } from "./comments.interface";

const commentsSchema = new Schema<Icomment>(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    name: { type: String, required: true },
    text: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, ref: "post" },
  },
  {
    timestamps: true,
  }
);
const Comments = model<Icomment>("comment", commentsSchema);
export default Comments;
