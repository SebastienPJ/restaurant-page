import backgroundImage from "./images/back-rice.jpeg";
import Icon from "./images/icon.png";
import { createMenuPage } from "./menu";

const clearPage = function() {
  const content = document.querySelector('#content');
  content.innerHTML = "";
  content.removeAttribute('style');
}


const createHomePage = function() {
  createNavBar();


  const mainDiv = document.querySelector('#content');
  

  mainDiv.style.backgroundImage = "url('./img/back-rice.jpeg')";
  mainDiv.style.backgroundSize = 'cover';
  mainDiv.style.backgroundPosition = 'center'



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
  logoLink.href = "index.html";
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
  });
  navBar.appendChild(homeButton);


  /***** MENU PAGE ******/
  const menuButton = document.createElement('button');
  menuButton.textContent = "Menu"
  menuButton.addEventListener("click", () => {
    clearPage();
    createMenuPage();
  });
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


export { createHomePage, createNavBar }