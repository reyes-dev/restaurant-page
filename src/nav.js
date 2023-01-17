import data from './data.json';

export default function generateNav(element) {
    // Create the navbar and it's links
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    // Set link attributes
    home.innerHTML = "Homepage";
    home.href = "#";
    home.classList.add("home");
    menu.innerHTML = "Menu";
    menu.href = "#";
    menu.classList.add("menu");
    contact.innerHTML = "Contact";
    contact.href = "#";
    contact.classList.add("contact");
    // Append links to nav
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    // Append nav to div container
    document.body.prepend(nav);
}