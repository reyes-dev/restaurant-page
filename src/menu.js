import data from './data.json';

export default function generateMenu(element) {
    // Generate menu content
    const header = document.createElement('h1');
    const ramen = document.createElement('section');
    const ramenName = document.createElement('h2');
    const ramenDescription = document.createElement('p');
    const sushi = document.createElement('section');
    const sushiName = document.createElement('h2');
    const sushiDescription = document.createElement('p');
    const gyudon = document.createElement('section');
    const gyudonName = document.createElement('h2');
    const gyudonDescription = document.createElement('p');
    // Populate menu elements with data
    header.innerHTML = data.menu.header;
    ramenName.innerHTML = data.menu.ramen.name;
    ramenDescription.innerHTML = data.menu.ramen.description;
    sushiName.innerHTML = data.menu.sushi.name;
    sushiDescription.innerHTML = data.menu.sushi.description;
    gyudonName.innerHTML = data.menu.gyudon.name;
    gyudonDescription.innerHTML = data.menu.gyudon.description;
    // Append elements to correct sections
    ramen.appendChild(ramenName);
    ramen.appendChild(ramenDescription);
    sushi.appendChild(sushiName);
    sushi.appendChild(sushiDescription);
    gyudon.appendChild(gyudonName);
    gyudon.appendChild(gyudonDescription);
    // Append menu content to div container
    element.appendChild(header);
    element.appendChild(ramen);
    element.appendChild(sushi);
    element.appendChild(gyudon);
}