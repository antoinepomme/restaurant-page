export default function header() {
    const pageHeader = document.createElement("div");
    pageHeader.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("header-title");
    title.textContent = "Capri"
    pageHeader.appendChild(title);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("header-buttons-container");
    const homeButton = document.createElement("button");
    homeButton.classList.add("home-button")
    homeButton.id = "home-button";
    homeButton.textContent = "Home";
    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button")
    menuButton.id = "menu-button";
    menuButton.textContent = "Menu";
    const contactButton = document.createElement("button");
    contactButton.classList.add("contact-button")
    contactButton.id = "contact-button";
    contactButton.textContent = "Contact";
    buttonsContainer.appendChild(homeButton);
    buttonsContainer.appendChild(menuButton);
    buttonsContainer.appendChild(contactButton);
    pageHeader.appendChild(buttonsContainer);

    return pageHeader;
}