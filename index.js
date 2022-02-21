// changes to make: 
// button visibility based on y position
// scroll when picture is clicked

// content

const content = {
 northTexasPlants: {
  image: './images/ntxplants.jpeg',
  content: 'This clean Bootstrap site features several North Texas area plants and a local nursery guide.'
 },

 RBASM: {
  image: './images/rbasm.jpeg',
  content: 'This website was created for a highly regarded North Texas business.'
 },

 northTexasPlantsApp: {
  image: './images/NTXPlants.gif',
  content: 'This is the North Texas Plants site reimagined as a React Native app, complete with the ability to create and share a shopping list.'
 },

 pocketQuotes: {
  image: './images/pocketQuotes.gif',
  content: 'This is a full stack MERN app. It fetches from the quotable.io API. Users can share quotes, create a login and save favorite quotes.'
 },

 NASA: {
  image: './images/APOD.gif',
  content: 'This is a simple web app that retrieves from the NASA Astronomy Picture of the Day API. This is the first project where I created a proxy server to hide the API key. I also learned Material UI for this project.'
 },
}

// variables

let downArrow = document.getElementById('down-arrow');

let buttonNTXP = document.getElementById('buttonNTXP');
let buttonRBASM = document.getElementById('buttonRBASM');
let buttonNTXPapp = document.getElementById('buttonNTXPapp');
let buttonPQ = document.getElementById('buttonPQ');

let projectPhoto = document.getElementById('project-photo-id');
let projectExplanation = document.getElementById('project-explanation-id');

let progress = document.getElementById('progress');

// change this to be hidden based on the y position
downArrow.onclick = () => {
 downArrow.style.visibility = 'hidden';
}

// Scroll function
console.log(buttonNTXP.getBoundingClientRect().y)

// button functionality

buttonNTXP.onclick = () => {
 projectPhoto.innerHTML = `<a class="purple" href="https://portfolio-ntxp.netlify.app" target="_blank"> <img class="img-fluid project-img" src='${content.northTexasPlants.image}' alt="screenshot of North Texas Plants Bootstrap site" /> </a>`;
 projectExplanation.textContent = content.northTexasPlants.content;
 projectPhoto.scrollIntoView();
}

buttonRBASM.onclick = () => {
 projectPhoto.innerHTML = `<a class="purple" href="https://www.rockwallbodyandsoul.com" target="_blank"><img class="img-fluid project-img" src='${content.RBASM.image}' alt="screenshot of Rockwall Body and Soul site" /> </a>`;
 projectExplanation.textContent = content.RBASM.content;
 projectPhoto.scrollIntoView();
}

buttonNTXPapp.onclick = () => {
 projectPhoto.innerHTML = `<a class="purple" href="https://expo.dev/@lilyruth/NTXPlants" target="_blank">  <img class="img-fluid project-img" src='${content.northTexasPlantsApp.image}' alt="gif screenrecord of the NTX Plants app" /> </a>`;
 projectExplanation.textContent = content.northTexasPlantsApp.content;
 projectPhoto.scrollIntoView();
}

buttonPQ.onclick = () => {
 projectPhoto.innerHTML = `<a class="purple" href="https://expo.dev/@lilyruth/pocketquotes" target="_blank"> <img class="img-fluid project-img" src='${content.pocketQuotes.image}' alt="gif screenrecord of the Pocket Quotes app" /> </a>`;
 projectExplanation.textContent = content.pocketQuotes.content; projectPhoto.scrollIntoView();
}

buttonNASA.onclick = () => {
 projectPhoto.innerHTML = `<a class="purple" href="https://ruthie-apod.netlify.app" target="_blank"> <img class="img-fluid project-img" src='${content.NASA.image}' alt="gif screenrecord of the NASA photo of the day app" /> </a>`;
 projectExplanation.textContent = content.NASA.content; projectPhoto.scrollIntoView();
}