import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { shopService } from "./shop.service";

const createShop = catchAsync(async (req, res) => {
  const result = await shopService.createShopInDb(req.body);
  const data = {
    status: true,
    message: "Shop created successfully",
    data: result,
  };
  sendResponse(res, data);
});
const getAllShops = catchAsync(async (req, res) => {
  const result = await shopService.getAllShopsFromDb();
  const data = {
    status: true,
    message: "Shops fetched successfully",
    data: result,
  };
  sendResponse(res, data);
});
const getSingleShop = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await shopService.getSignleShopFromDb(id);
  const data = {
    status: true,
    message: "Shop fetched successfully",
    data: result,
  };
  sendResponse(res, data);
});
export const shopController = {
  createShop,
  getAllShops,
  getSingleShop,
};
