import "regenerator-runtime";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/style/style.css";
import "./src/script/component/search-bar.js"
import "./src/script/component/modal-content.js";
import "./src/script/component/drink-list.js";
import main from "./src/script/main.js";

document.addEventListener("DOMContentLoaded", main);