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
exports.postService = void 0;
const posts_model_1 = require("./posts.model");
const createPostInDb = (post) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield posts_model_1.postModel.create(post)).populate("author");
    return result;
});
const getPostsFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield posts_model_1.postModel
        .find(query)
        .populate("author")
        .populate("comment");
    if (!result || result.length === 0) {
        throw new Error(" No posts found");
    }
    return result;
});
const getSignlePostFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield posts_model_1.postModel
        .findById(id)
        .populate("author")
        .populate("comment");
    if (!result) {
        throw new Error("No post found");
    }
    return result;
});
// const getPostsByTypeFromDb = async (type: string) => {
//   const result = await postModel
//     .find({ type: type })
//     .populate("author")
//     .populate("comment");
//   if (!result || result.length === 0) {
//     throw new Error("No posts found");
//   }
//   return result;
// };
exports.postService = {
    createPostInDb,
    getPostsFromDb,
    getSignlePostFromDb,
    //   getPostsByTypeFromDb,
};
