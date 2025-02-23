import mongoose from "mongoose";
import { cartModel } from "./orders.model";

type Tmeal = {
  userId: string;
  planId: string;
  quantity: number;
  price: number;
};
type deletedItem = {
  cartId: string;
  itemId: string;
  price: number;
  quantity: number;
};
const addToCartInDb = async (meal: Tmeal) => {
  const productId = new mongoose.Types.ObjectId(
    meal.planId
  ) as unknown as mongoose.Schema.Types.ObjectId;
  let cart = await cartModel.findOne({ userId: meal.userId });
  if (cart) {
    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId.toString()
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ product: productId, quantity: 1 });
    }
    cart.quantity += 1;
    cart.total += meal.price;
    await cart.save();
    return cart;
  } else {
    cart = new cartModel({
      userId: meal.userId,
      items: [{ product: productId, quantity: 1 }],
      quantity: 1,
      total: meal.price,
    });
    await cart.save();
    return cart;
  }
};
const getCartInDb = async (userId: string) => {
  const result = await cartModel.findOne({ userId }).populate("items.product");
  if (!result) {
    throw new Error("no items in cart");
  }
  return result;
};
// const deleteCartFromDb = async (product: deletedItem) => {
//   const cart = cartModel.findById(product.cartId);
//   console.log("cart", cart);
//   if (!cart) {
//     throw new Error("Cart not found to delete");
//   }
//   cart.quantity -= product.quantity;
//   cart.total -= product.price;
//   cart.items.filter((item) => item.product.toString() !== product.itemId);
//   await cart.save();
//   return cart;
// };
const deleteCartFromDb = async (product: deletedItem) => {
  // Find the cart by its cartId
  const cart = await cartModel.findById(product.cartId);

  if (!cart) {
    throw new Error("Cart not found to delete");
  }

  // Remove the item from the items array by filtering out the one with the matching product id
  cart.items = cart.items.filter(
    (item) => item.product.toString() !== product.itemId
  );

  // Update the cart's total quantity and total price
  cart.quantity -= product.quantity;
  cart.total -= product.price;

  await cart.save();
  return cart;
};
export const orderService = {
  addToCartInDb,
  getCartInDb,
  deleteCartFromDb,
};
