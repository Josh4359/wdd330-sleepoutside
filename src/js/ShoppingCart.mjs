import { renderListWithTemplate } from "./utils.mjs";

function shoppingCartTemplate(item) {
  return `<li class='cart-card divider'>
    <a href='/product_pages/?product=${item.Id}' class='cart-card__image'>
        <img
        src='${item.Images.PrimarySmall}'
        alt='${item.Name}'
        />
    </a>
    <a href='/product_pages/?product=${item.Id}'>
        <h2 class='card__name'>${item.Name}</h2>
    </a>
    <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
    <p class='cart-card__quantity'>qty: 1</p>
    <p class='cart-card__price'>$${item.FinalPrice}</p>
    </li>`;
}

export default class ShoppingCart {
    constructor(items, listElement) {
        this.items = items;
        this.listElement = listElement
    }
    async init() {
        if (this.items == 0) return
        this.renderCartContents(this.items)
    }
    renderCartContents(items) {
      renderListWithTemplate(shoppingCartTemplate, this.listElement, items, undefined, true)
    }
}
