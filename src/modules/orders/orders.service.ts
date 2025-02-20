import mongoose from "mongoose";
import { cartModel } from "./orders.model";

type Tmeal = {
  userId: string;
  planId: string;
  quantity: number;
  price: number;
};
const addToCartInDb = async (meal: Tmeal) => {
  //   let cart = await cartModel.findOne({ userId: meal.userId });
  //   if (!cart) {
  //     cart = new cartModel({
  //       userId: meal.userId,
  //       items: [],
  //       quantity: 0,
  //       total: 0,
  //     });
  //   }

  //   const existingItem = cart.items.find(
  //     (item) => item.toString() == meal.planId
  //   );
  //   if (existingItem) {
  //     cart.quantity += 1;
  //   } else {
  //     cart.items.push(meal.planId);
  //   }
  //   cart.total += meal.price;
  //   await cart.save();
  //   return cart;
  let cart = await cartModel.findOne({ userId: meal.userId });
  const productId = new mongoose.Types.ObjectId(
    meal.planId
  ) as unknown as mongoose.Schema.Types.ObjectId;
  if (cart) {
    if (cart.items.includes(productId)) {
      cart.quantity += 1;
      cart.total += meal.price;
      await cart.save();
      return cart;
    } else {
      cart.items.push(productId);
      cart.quantity += 1;
      cart.total += meal.price;
      await cart.save();
      return cart;
    }
  } else {
    cart = new cartModel({
      userId: meal.userId,
      items: [productId],
      quantity: 1,
      total: meal.price,
    });
    await cart.save();
    return cart;
  }
};
const getCartInDb = async (userId: string) => {
  const result = await cartModel.findOne({ userId }).populate("items");
  if (!result) {
    throw new Error("no items in cart");
  }
  return result;
};
export const orderService = {
  addToCartInDb,
  getCartInDb,
};
