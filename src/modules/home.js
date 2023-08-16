export default function home() {
    const homePage = document.createElement("div");
    homePage.classList.add("tab");
    homePage.classList.add("home-page");

    const title = document.createElement("h2");
    title.textContent = "\“ Toutes nos pizzas sont faites artisanalement et garnies de produits frais, sans graisses animales, d'Emmental français et de Mozzarella fabriquée à Aix-en-Provence par la fromagerie Castellano depuis 1953.\”";
    homePage.appendChild(title);

    return homePage;
}