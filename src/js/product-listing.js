import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category")

const categories = {
    "tents": "Tents",
    "backpacks": "Backpacks",
    "sleeping-bags": "Sleeping Bags",
    "hammocks": "Hammocks"
}
document.querySelector("#category-title").textContent = categories[category];

const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);

productList.init();
