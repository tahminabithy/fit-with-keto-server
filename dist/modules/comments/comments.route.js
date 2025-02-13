"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRoute = void 0;
const express_1 = require("express");
const comments_controller_1 = require("./comments.controller");
exports.commentsRoute = (0, express_1.Router)();
exports.commentsRoute.post("/comments", comments_controller_1.commentController.createComment);
// commentsRoute.get("/comments", commentController.getComments);
