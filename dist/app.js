"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const posts_route_1 = require("./modules/posts/posts.route");
const users_route_1 = require("./modules/users/users.route");
const comments_route_1 = require("./modules/comments/comments.route");
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
exports.app = (0, express_1.default)();
// json parser
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/api", posts_route_1.postRoute);
exports.app.use("/api", users_route_1.userRoute);
exports.app.use("/api", comments_route_1.commentsRoute);
exports.app.use(globalErrorHandler_1.default);
exports.app.get("/", (req, res) => {
    res.send("Hello World!");
});
// ketoUser
// glMFR6tIsZX6tnbc
