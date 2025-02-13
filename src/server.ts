import mongoose from "mongoose";
import { app } from "./app";
import { config } from "./config";

async function runServer() {
  try {
    await mongoose.connect(config.mongoUri as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
runServer();
