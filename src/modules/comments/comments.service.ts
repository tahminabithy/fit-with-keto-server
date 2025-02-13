import { postModel } from "../posts/posts.model";
import { Icomment } from "./comments.interface";
import Comments from "./comments.model";

const createCommentInDb = async (comment: Icomment) => {
  const newComment = await Comments.create(comment);
  if (newComment) {
    await postModel.findByIdAndUpdate(
      comment.postId,
      { $push: { comment: newComment._id } },
      { new: true }
    );
    return newComment;
  }
};
export const commentService = {
  createCommentInDb,
};
