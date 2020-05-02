import DataSource from "../script/data/source-data.js";
const itemList = document.querySelector("#item-list");
const modalDialog = document.querySelector(".modal-dialog");
const searchBar = document.querySelector("search-bar");
const drinkList = document.querySelector("drink-list");

const getAllRecipe = async () => {
    try {
        const meals = await DataSource.getAll();
        renderItem(meals);
    } catch (err) {
        renderError(err);
    }
}

const getById = async (id) => {
    try {
        const drink = await DataSource.getById(id);
        const modalContent = document.createElement("modal-content");
        modalDialog.innerHTML = "";
        modalContent.drink = drink;
        modalDialog.appendChild(modalContent);
    } catch (err) {
        console.log(err);
    }
}

function main() {

    itemList.addEventListener("click", (event) => {
        if (event.target.getAttribute("id") == "modal") {
            const id = event.target.parentElement.getAttribute("id");
            getById(id);
        }
    });

    getAllRecipe();
    const clickedButton = async () => {
        try {
            const drink = await DataSource.getByKeyword(searchBar.value);
            renderItem(drink);
        } catch (err) {
            renderError(err);
        }
    }
    searchBar.clickEvent = clickedButton;
}

function renderError(message = "Periksa koneksi internet anda") {
    alert(message);
}

function renderItem(results) {
    drinkList.drinks = results;
}

export default main;