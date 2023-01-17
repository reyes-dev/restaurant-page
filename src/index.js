import './style.css';
import './content.js';
import generateContent from './content.js';

const element = document.querySelector('div#content');
generateContent(element);