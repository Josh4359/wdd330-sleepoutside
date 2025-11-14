import { setLocalStorage, renderListWithTemplate } from "./utils.mjs";

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
    <button class="cart-remove" id="remove-${item.Id}">X</button>
    </li>`;
}

export default class ShoppingCart {
    constructor(items, listElement) {
        this.items = items;
        this.listElement = listElement;
    }
    async init() {
        this.renderCartContents(this.items);
    }
    renderCartContents(items) {
        if (this.items == 0) {
            this.listElement.innerHTML = "<li>Your cart is empty!</li>";
            return;
        }
        
        renderListWithTemplate(shoppingCartTemplate, this.listElement, items, undefined, true);
        
        this.items.forEach(item => {
            const rem = document.querySelector(`#remove-${item.Id}`);
            rem.addEventListener("click", () => {
                this.items = this.items.filter(x => x.Id != item.Id);
                setLocalStorage("so-cart", this.items);
                this.renderCartContents(this.items);
            });
        });
    }
}
