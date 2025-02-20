import { Ishop } from "./shop.interface";
import shopModel from "./shop.model";

const createShopInDb = async (shop: Ishop) => {
  const result = await shopModel.create(shop);
  return result;
};
const getAllShopsFromDb = async () => {
  const result = await shopModel.find();
  return result;
};
const getSignleShopFromDb = async (id: string) => {
  const result = await shopModel.findById(id);
  return result;
};
export const shopService = {
  createShopInDb,
  getAllShopsFromDb,
  getSignleShopFromDb,
};
