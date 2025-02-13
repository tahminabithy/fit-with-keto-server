"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postModel = void 0;
const mongoose_1 = require("mongoose");
const posts_schema_1 = require("./posts.schema");
exports.postModel = (0, mongoose_1.model)("post", posts_schema_1.postSchema);
