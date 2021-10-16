import backgroundImage from "./back-rice.jpeg";
import Icon from "./icon.png";

const clearPage = function() {
  const content = document.querySelector('#content');
  content.textContent = "";
}

const createMenuPage = function() {
  createNavBar();
  console.log("menu Page created")
}

const createContactPage = function() {
  createNavBar();
  console.log('Contact page has been created')
}



const createHomePage = function() {
  createNavBar();


  // myBackgroundImg.classList.add('logo-img');
  // logoLink.appendChild(myBackgroundImg);

  const primaryDiv = document.querySelector('#content');


  const myBackgroundImg= new Image();
  myBackgroundImg.src = backgroundImage;

  // primaryDiv.style.backgroundImage = "url('./37088b799fb384b95bc0.jpeg')"
  // primaryDiv.style.backgroundImage = "url('./back-rice.jpeg')"
  primaryDiv.style.backgroundImage = myBackgroundImg;



  // primaryDiv.appendChild(myBackgroundImg)


  primaryDiv.style.backgroundPsition = 'center'
  // primaryDiv.style.background = "url('./src/back-rice.jpeg') no-repeat fixed center";
  primaryDiv.style.backgroundSize = 'cover';
  primaryDiv.style.backgroundAttachment = 'fixed';

  const mainDiv = document.querySelector('#content');
 



  /***** Message on main page *****/
  const headline = document.createElement('main')
  mainDiv.appendChild(headline);

  const message = document.createElement('h1');
  message.textContent = "Sending patrons to cloud nine since 1943!"
  headline.appendChild(message);

};


const createNavBar = function() {
  const contentDiv = document.querySelector('#content');



  const header = document.createElement('header');
  header.classList.add('header');
  contentDiv.appendChild(header);


  /***** LOGO LINK *****/
  const logoLink = document.createElement('a');
  logoLink.classList.add('logo-link');
  logoLink.href = "index.html"
  header.appendChild(logoLink);


  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('logo-img');
  logoLink.appendChild(myIcon);


  const navBar = document.createElement('nav');
  header.appendChild(navBar);



  /***** HOME PAGE *****/
  const homeButton = document.createElement('button');
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", () => {
    clearPage();
    createHomePage();
  })
  navBar.appendChild(homeButton);


  /***** MENU PAGE ******/
  const menuButton = document.createElement('button');
  menuButton.textContent = "Menu"
  menuButton.addEventListener("click", () => {
    clearPage();
    createMenuPage();
  })
  navBar.appendChild(menuButton);




  /***** CONTACt PAGE *****/
  const contactButton = document.createElement('button');
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", () => {
    clearPage();
    createContactPage();
  })
  navBar.appendChild(contactButton);

};


export { createHomePage }