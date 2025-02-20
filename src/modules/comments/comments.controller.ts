import { Request, Response } from "express";
import { commentService } from "./comments.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createComment = async (req: Request, res: Response) => {
  const result = await commentService.createCommentInDb(req.body);
  res.status(201).json({
    message: "Comment created successfully",
    data: result,
  });
};
// const getComments= catchAsync(
//   async (req, res) => {
//     const result = await commentService.createCommentInDb();
//     const data = {
//        status: true,
//        message: "comments fetched successfully",
//        data: result,
//      };
//      sendResponse(res, data);
//   }
// )
export const commentController = {
  createComment,
};
