import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.join(process.cwd(), ".env"),
});
export const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.DATABASE_URL,
  jwtSecret: process.env.jwt_secret,
};
