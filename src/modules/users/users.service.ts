import jwt from "jsonwebtoken";
import { authUser, Iusers } from "./users.interface";
import { Users } from "./users.model";
import { config } from "../../config";

const createUserInDb = async (user: Iusers) => {
  const userExists = await Users.findOne({ email: user.email });
  if (userExists) {
    throw new Error("User already exists");
  }
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
    uid: result._id,
    name: result.name,
    email: result.email,
    role: result.role,
    accessToken: token,
  };
  return user;
};
const gmailLoginInDb = async (body: Iusers) => {
  let userExist = await Users.findOne({ email: body.email });
  if (!userExist) {
    userExist = await Users.create(body);
  }
  const token = jwt.sign(
    { name: userExist.name, email: userExist.email, role: userExist.role },
    config.jwtSecret as string,
    { expiresIn: "1h" }
  );
  const user = {
    uid: userExist._id,
    name: userExist.name,
    email: userExist.email,
    role: userExist.role,
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
  gmailLoginInDb,
};
