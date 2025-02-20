import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { orderService } from "./orders.service";

const addToCart = catchAsync(async (req, res) => {
  const result = await orderService.addToCartInDb(req.body);
  const data = {
    status: true,
    message: "Cart added successfully",
    data: result,
  };
  sendResponse(res, data);
});
const getCart = catchAsync(async (req, res) => {
  const uid = req.params.id;
  console.log(uid);
  const result = await orderService.getCartInDb(uid);
  const data = {
    status: true,
    message: "Cart fetched successfully",
    data: result,
  };
  sendResponse(res, data);
});
export const orderController = {
  addToCart,
  getCart,
};
