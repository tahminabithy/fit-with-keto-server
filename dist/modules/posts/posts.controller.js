"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const posts_service_1 = require("./posts.service");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const createPost = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield posts_service_1.postService.createPostInDb(req.body);
    const data = {
        status: true,
        message: "Post created successfully",
        data: result,
    };
    (0, sendResponse_1.sendResponse)(res, data);
}));
const getPosts = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const result = yield posts_service_1.postService.getPostsFromDb(req.query);
    const data = {
        status: true,
        message: "Posts fetched successfully",
        data: result,
    };
    (0, sendResponse_1.sendResponse)(res, data);
}));
const getSinglePost = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield posts_service_1.postService.getSignlePostFromDb(id);
    const data = {
        status: true,
        message: "Post fetched successfully",
        data: result,
    };
    (0, sendResponse_1.sendResponse)(res, data);
}));
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
exports.postController = {
    createPost,
    getPosts,
    getSinglePost,
    //   getPostsByType,
};
