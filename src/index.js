import './styles/style.css'
import './styles/header.css';
import './styles/home.css';
import header from './modules/header.js';
import home from './modules/home.js'

const content = document.getElementById("content");

content.appendChild(header());
const container = document.createElement("div");
container.classList.add("container");
content.appendChild(container);
container.appendChild(home());