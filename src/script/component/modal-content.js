class ModalContent extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    render() {
        this._drink.forEach(drink => {
            const {
                strDrink,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strInstructions
            } = drink;
            this.innerHTML = `
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">${strDrink}</h4>
                </div>
                <div class="modal-body">
                <h4>ingredients</h4>
                <ol>
                <li>${strIngredient1}</li>
                <li>${strIngredient2}</li>
                <li>${strIngredient3}</li>
                <li>${strIngredient4}</li>
                </ol>
                    <h4>Instruction</h4>
                    <p>${strInstructions}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                </div>
            </div>`
        });

    }

}

customElements.define("modal-content", ModalContent);