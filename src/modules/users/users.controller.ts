import { RequestHandler } from "express";
import { userServices } from "./users.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createUser = catchAsync(async (req, res) => {
  const result = await userServices.createUserInDb(req.body);
  const data = {
    status: true,
    message: "User created successfully",
    data: result,
  };
  sendResponse(res, data);
});

const loginUser = catchAsync(async (req, res) => {
  const result = await userServices.loginUserInDb(req.body);
  const data = {
    status: true,
    message: "User logged in successfully",
    data: result,
  };
  sendResponse(res, data);
});

const getSingleUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await userServices.getSingleUserFromDb(id);
  const data = {
    status: true,
    message: "Posts fetched successfully",
    data: result,
  };
  sendResponse(res, data);
});
export const userController = {
  createUser,
  getSingleUser,
  loginUser,
};
