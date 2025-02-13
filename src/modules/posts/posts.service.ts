import { Ipost } from "./posts.interface";
import { postModel } from "./posts.model";

const createPostInDb = async (post: Ipost) => {
  const result = (await postModel.create(post)).populate("author");
  return result;
};
const getPostsFromDb = async (query: Record<string, unknown>) => {
  const result = await postModel
    .find(query)
    .populate("author")
    .populate("comment");
  if (!result || result.length === 0) {
    throw new Error(" No posts found");
  }
  return result;
};
const getSignlePostFromDb = async (id: string) => {
  const result = await postModel
    .findById(id)
    .populate("author")
    .populate("comment");
  if (!result) {
    throw new Error("No post found");
  }
  return result;
};
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
export const postService = {
  createPostInDb,
  getPostsFromDb,
  getSignlePostFromDb,
  //   getPostsByTypeFromDb,
};
