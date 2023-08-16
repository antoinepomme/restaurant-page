export default function menu() {
    const menuPage = document.createElement("div");
    menuPage.classList.add("tab");
    menuPage.classList.add("menu-page");

    const ul = document.createElement("ul");

    function createListItem(title, ingredients, price) {
        let li = document.createElement("li");
        let h4 = document.createElement("h4");
        h4.textContent = title;
        li.appendChild(h4);
        let p = document.createElement("p");
        p.textContent = ingredients;
        li.appendChild(p);
        let span = document.createElement("span");
        span.textContent = price;
        li.appendChild(span);
        ul.appendChild(li);
    }

    createListItem("ANCHOIS","anchois, tomate","9.90 €");
    createListItem("FROMAGE","emmental, tomate","10.50 €");
    createListItem("CHAMPIGNONS","champignons frais, emmental, tomate","11.50 €");
    createListItem("POIVRONS","poivrons frais, emmental, tomate","11.50 €");
    createListItem("JAMBON","jambon, emmental, tomate","11.50 €");
    createListItem("MOZZARELLA","mozzarella, tomate","12.00 €");
    createListItem("ROYALE","jambon, champignons frais, emmental, tomate","12.00 €");
    createListItem("TROIS FROMAGES","chèvre, roquefort, emmental, crème fraîche","12.90 €");


    menuPage.appendChild(ul);

    return menuPage;
}