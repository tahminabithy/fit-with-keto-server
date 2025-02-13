import { request, RequestHandler } from "express";
import { postService } from "./posts.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createPost: RequestHandler = catchAsync(async (req, res) => {
  const result = await postService.createPostInDb(req.body);
  const data = {
    status: true,
    message: "Post created successfully",
    data: result,
  };
  sendResponse(res, data);
});
const getPosts = catchAsync(async (req, res) => {
  console.log(req.query);

  const result = await postService.getPostsFromDb(req.query);
  const data = {
    status: true,
    message: "Posts fetched successfully",
    data: result,
  };
  sendResponse(res, data);
});
const getSinglePost = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await postService.getSignlePostFromDb(id);
  const data = {
    status: true,
    message: "Post fetched successfully",
    data: result,
  };
  sendResponse(res, data);
});
// const getPostsByType = catchAsync(async (req, res) => {
//   console.log(req.query);
//   const result = await postService.getPostsByTypeFromDb(
//     req.query.type as string
//   );
//   const data = {
//     status: true,
//     message: "Posts fetched successfully",
//     data: result,
//   };
//   sendResponse(res, data);
// });
export const postController = {
  createPost,
  getPosts,
  getSinglePost,
  //   getPostsByType,
};
