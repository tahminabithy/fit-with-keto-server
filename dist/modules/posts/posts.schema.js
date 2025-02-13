"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = void 0;
const mongoose_1 = require("mongoose");
exports.postSchema = new mongoose_1.Schema({
    author: { type: String, required: true, ref: "user" },
    title: { type: String, required: true },
    subtitle: { type: String, required: true, max: 200, min: 100, trim: true },
    readTime: { type: Number, required: true },
    description: {
        type: String,
        required: true,
        max: 1000,
        min: 400,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["recipe", "lifeStyle"],
    },
    comment: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "comment" }],
    img: { type: String, required: true },
}, {
    timestamps: true,
});
