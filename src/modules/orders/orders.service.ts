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
const singleItemFromCart = async () => {};
const getCartInDb = async (userId: string) => {
  const result = await cartModel.findOne({ userId }).populate("items.product");
  if (!result) {
    throw new Error("No cart found");
  }
  return result;
};

// const deleteCartFromDb = async (product: deletedItem) => {
//   // Find the cart by its cartId
//   const cart = await cartModel.findById(product.cartId);

//   if (!cart) {
//     throw new Error("Cart not found to delete");
//   }

//   // Remove the item from the items array by filtering out the one with the matching product id
//   cart.items = cart.items.filter(
//     (item) => item.product.toString() !== product.itemId
//   );

//   // Update the cart's total quantity and total price
//   cart.quantity -= product.quantity;
//   cart.total -= product.price;
//   await cart.save();
//   return cart;
// };
const deleteCartFromDb = async (product: deletedItem) => {
  // Find the cart by its cartId
  const cart = await cartModel.findById(product.cartId);
  if (!cart) {
    throw new Error("Cart not found to delete");
  }

  // Find the index of the item with matching product id
  const itemIndex = cart.items.findIndex(
    (item) => item.product.toString() === product.itemId
  );

  if (itemIndex === -1) {
    throw new Error("Item not found in cart");
  }

  // Get the item from the cart
  const cartItem = cart.items[itemIndex];

  // If the item's quantity is greater than the quantity to delete, subtract one unit; otherwise, remove the item entirely.
  if (cartItem.quantity > product.quantity) {
    cartItem.quantity -= product.quantity;
  } else {
    // Remove the item entirely if the remaining quantity would be zero or less.
    cart.items.splice(itemIndex, 1);
  }

  // Update the overall cart totals.
  // Note: We assume product.price is the price per unit.
  cart.quantity -= product.quantity;
  cart.total -= product.price * product.quantity;

  await cart.save();
  return cart;
};

export const orderService = {
  addToCartInDb,
  getCartInDb,
  deleteCartFromDb,
};
