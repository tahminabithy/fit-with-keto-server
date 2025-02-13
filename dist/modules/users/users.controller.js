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
exports.userController = void 0;
const users_service_1 = require("./users.service");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const createUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_service_1.userServices.createUserInDb(req.body);
    const data = {
        status: true,
        message: "User created successfully",
        data: result,
    };
    (0, sendResponse_1.sendResponse)(res, data);
}));
const getSingleUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield users_service_1.userServices.getSingleUserFromDb(id);
    const data = {
        status: true,
        message: "Posts fetched successfully",
        data: result,
    };
    (0, sendResponse_1.sendResponse)(res, data);
}));
exports.userController = {
    createUser,
    getSingleUser,
};
