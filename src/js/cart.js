import ShoppingCart from "./ShoppingCart.mjs";
import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";

loadHeaderFooter();

const items = getLocalStorage("so-cart") || [];
const element = document.querySelector(".product-list");
const shoppingCart = new ShoppingCart(items, element);

shoppingCart.init();
