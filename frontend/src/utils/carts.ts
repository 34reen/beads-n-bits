import type { Product } from "@/types";

export type CartItem = Product & { quantity: number };

export const getCart = (): CartItem[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (product: Product) => {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === product.id);

  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

export const removeFromCart = (productId: string) => {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
};

export const updateCartItemQuantity = (productId: string, quantity: number) => {
  const cart = getCart().map((item) =>
    item.id === productId ? { ...item, quantity } : item
  );
  saveCart(cart);
};

export const getCartTotal = (cart: CartItem[]): number =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
