import data from './data.json';

export default function generateContact(element) {
    // Generate contact content
    const header = document.createElement('h1');
    const owner = document.createElement('section');
    const ownerName = document.createElement('h2');
    const ownerPhone = document.createElement('p');
    const ownerEmail = document.createElement('p');
    const chef = document.createElement('section');
    const chefName = document.createElement('h2');
    const chefPhone = document.createElement('p');
    const chefEmail = document.createElement('p');
    // Populate contact elements with data
    header.innerHTML = data.contact.header;
    ownerName.innerHTML = data.contact.owner.name;
    ownerPhone.innerHTML = data.contact.owner.phone;
    ownerEmail.innerHTML = data.contact.owner.email;
    chefName.innerHTML = data.contact.chef.name;
    chefPhone.innerHTML = data.contact.chef.phone;
    chefEmail.innerHTML = data.contact.chef.email;
    // Append elements to correct sections
    owner.appendChild(ownerName);
    owner.appendChild(ownerPhone);
    owner.appendChild(ownerEmail);
    chef.appendChild(chefName);
    chef.appendChild(chefPhone);
    chef.appendChild(chefEmail);
    // Append contact content to div container
    element.appendChild(header);
    element.appendChild(owner);
    element.appendChild(chef);
};