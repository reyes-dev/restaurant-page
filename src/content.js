import data from './data.json';
import izakayaImg from './izakaya.jpg';

// Takes an HTML element and populates it with page content
export default function generateContent(element) {
    // Create elements
    const header = document.createElement('h1');
    const img = new Image();
    const paragraph = document.createElement('p');
    // Set their content 
    header.innerHTML = data.homepage.header;
    img.src = izakayaImg;
    img.alt =  data.homepage.imgalt;
    paragraph.innerHTML = data.homepage.paragraph;
    // Add to passed element
    element.appendChild(header);
    element.appendChild(img);
    element.appendChild(paragraph);
}