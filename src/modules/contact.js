export default function contact() {
    const contactPage = document.createElement("div");
    contactPage.classList.add("tab");
    contactPage.classList.add("contact-page");

    const title = document.createElement("h2");
    title.textContent = "Vieux Port : 2 rue Breteuil 13001 Marseille\r\nSaint-Ferréol : 13 rue Saint-Ferréol 13001 Marseille\r\nCommandez vos pizzas :\r\nà partir de 18h au +33 (0)4 91 73 08 24";
    contactPage.appendChild(title);

    return contactPage;
}