import "./drink-item.js";

class DrinkList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this.setAttribute("class", "row");
        this.setAttribute("id", "item-list");
        this._drinks.forEach(drink => {
            const drinkItem = document.createElement("drink-item");
            drinkItem.drink = drink;
            this.appendChild(drinkItem);
        });
    }
}

customElements.define("drink-list", DrinkList);