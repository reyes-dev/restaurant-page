import './style.css';
import './content.js';
import generateContent from './content.js';
import generateNav from './nav.js';

const element = document.querySelector('div#content');
generateNav(element);
generateContent(element);