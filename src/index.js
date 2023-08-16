import './styles/style.css'
import './styles/header.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';
import header from './modules/header.js';
import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

const content = document.getElementById("content");

content.appendChild(header());
const container = document.createElement("div");
container.classList.add("container");
content.appendChild(container);

container.appendChild(home());

function changeTab(id) {
    if (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if (id === "home-button") {
        container.appendChild(home());
    } else if (id === "menu-button") {
        container.appendChild(menu());
    } else if (id === "contact-button") {
        container.appendChild(contact());
    }
}

const homeButton = document.getElementById("home-button");
homeButton.addEventListener('click', () => {
    changeTab(homeButton.id);
});
const menuButton = document.getElementById("menu-button");
menuButton.addEventListener('click', () => {
    changeTab(menuButton.id);
});
const contactButton = document.getElementById("contact-button");
contactButton.addEventListener('click', () => {
    changeTab(contactButton.id);
});