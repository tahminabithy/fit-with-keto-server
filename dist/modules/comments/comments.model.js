"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentsSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "user" },
    name: { type: String, required: true },
    text: { type: String, required: true },
    postId: { type: mongoose_1.Schema.Types.ObjectId, ref: "post" },
}, {
    timestamps: true,
});
const Comments = (0, mongoose_1.model)("comment", commentsSchema);
exports.default = Comments;
