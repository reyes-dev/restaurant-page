import './style.css';
import './content.js';
import generateContent from './content.js';
import generateNav from './nav.js';
import generateMenu from './menu.js';
import generateContact from './contact.js';
// Select the main div container
const element = document.querySelector('div#content');
// Build the landing page
generateNav(element);
generateContent(element);
// Select the nav links
const homepage = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
// Event listeners for tabbed browsing experience
homepage.addEventListener('click', function() {
    console.log('homepage');
    element.innerHTML = '';
    generateContent(element);
});
menu.addEventListener('click', function() {
    element.innerHTML = '';
    generateMenu(element);
})
contact.addEventListener('click', function() {
    element.innerHTML = '';
    generateContact(element);
});