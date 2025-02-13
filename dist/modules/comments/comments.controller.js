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
exports.commentController = void 0;
const comments_service_1 = require("./comments.service");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comments_service_1.commentService.createCommentInDb(req.body);
    res.status(201).json({
        message: "Comment created successfully",
        data: result,
    });
});
exports.commentController = {
    createComment,
};
