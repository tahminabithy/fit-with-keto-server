import jwt from "jsonwebtoken";
import { authUser, Iusers } from "./users.interface";
import { Users } from "./users.model";
import e from "express";
import { config } from "../../config";

const createUserInDb = async (user: Iusers) => {
  const result = await Users.create(user);
  return result;
};
const loginUserInDb = async (credentials: authUser) => {
  const result = await Users.findOne({ email: credentials.email });
  if (!result) {
    throw new Error("No user found");
  }
  const token = jwt.sign(
    { name: result.name, email: result.email, role: result.role },
    config.jwtSecret as string,
    { expiresIn: "1h" }
  );
  const user = {
    name: result.name,
    email: result.email,
    role: result.role,
    accessToken: token,
  };
  return user;
};
const getSingleUserFromDb = async (id: string) => {
  const result = await Users.findById(id);
  console.log(result);

  if (!result) {
    throw new Error("Invalid credentials");
  }
  return result;
};
export const userServices = {
  createUserInDb,
  getSingleUserFromDb,
  loginUserInDb,
};
