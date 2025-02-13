"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"],
        default: "user",
    },
    password: { type: String, required: true, trim: true },
}, {
    timestamps: true,
});
exports.Users = (0, mongoose_1.model)("user", userSchema);
