class DrinkItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    render() {
        const {
            strDrink,
            strDrinkThumb,
            idDrink
        } = this._drink;
        this.setAttribute("class", "col-md-4 col-sm-12 mb-3");
        this.innerHTML = `
        <div class="card">
        <img src="${strDrinkThumb}"
            class="card-img-top" alt="img">
        <div class="card-body" id="${idDrink}">
            <h5 class="card-title">${strDrink}</h5>
            <button id="modal" class="btn btn-primary btn-block" data-toggle="modal" data-target="#myModal">Detail</button>
        </div>
    </div>
        `
    }
}

customElements.define("drink-item", DrinkItem);