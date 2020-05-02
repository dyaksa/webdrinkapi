class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search").value;
    }

    render() {
        this.innerHTML = `
        <div class="input-group mb-3">
        <input type="search" id="search" class="form-control form-control-sm mr-2" placeholder="Masukan Keyword">
        <span class="input-group-btn">
            <button id="button" class="btn btn-sm btn-dark" type="submit">Search</button>
        </span>
    </div>
        `
        this.querySelector("#button").addEventListener("click", this._clickEvent);
    }

}

customElements.define("search-bar", SearchBar);