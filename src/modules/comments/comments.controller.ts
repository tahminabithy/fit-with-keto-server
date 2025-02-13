import { Request, Response } from "express";
import { commentService } from "./comments.service";

const createComment = async (req: Request, res: Response) => {
  const result = await commentService.createCommentInDb(req.body);
  res.status(201).json({
    message: "Comment created successfully",
    data: result,
  });
};
export const commentController = {
  createComment,
};
