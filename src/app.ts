import express from "express";
import cors from "cors";
import { postRoute } from "./modules/posts/posts.route";
import { userRoute } from "./modules/users/users.route";
import { commentsRoute } from "./modules/comments/comments.route";
import globalErrorHandler from "./middleware/globalErrorHandler";
import { shopRouter } from "./modules/shop/shop.route";
import { orderRoute } from "./modules/orders/orders.route";
export const app = express();
// json parser
app.use(express.json());
app.use(cors());

app.use("/api", postRoute);
app.use("/api", userRoute);
app.use("/api", commentsRoute);
app.use("/api", shopRouter);
app.use("/api", orderRoute);

app.use(globalErrorHandler);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ketoUser
// glMFR6tIsZX6tnbc
