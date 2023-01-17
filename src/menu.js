import data from './data.json';

export default function generateMenu(element) {
    // Generate menu content
    const header = document.createElement('h1');
    const ramen = document.createElement('section');
    const ramenName = document.createElement('h2');
    const ramenDescription = document.createElement('p');
    // Populate menu elements with data
    header.innerHTML = data.menu.header;
    ramenName.innerHTML = data.menu.ramen.name;
    ramenDescription.innerHTML = data.menu.ramen.description;
    // Append elements to correct sections
    ramen.appendChild(ramenName);
    ramen.appendChild(ramenDescription);
    // Append menu content to div container
}