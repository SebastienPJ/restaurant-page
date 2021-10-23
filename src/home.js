import backgroundImage from "./images/back-rice.jpeg";
import Icon from "./images/icon.png";
import { createMenuPage } from "./menu";
import { createContactPage }  from "./contact"

const clearPage = function() {
  const content = document.querySelector('#content');
  content.innerHTML = "";
  content.removeAttribute('style');
}


const createHomePage = function() {


  const mainDiv = document.querySelector('#content');

  mainDiv.appendChild(createNavBar());
  




  /***** Message on main page *****/
  const headline = document.createElement('main');
  headline.style.backgroundImage = "url('./img/back-rice.jpg')";
  headline.style.backgroundSize = 'cover';
  headline.style.backgroundPosition = 'center'



  mainDiv.appendChild(headline);

  const message = document.createElement('h1');
  message.textContent = "Satisfying taste buds since 1943!"
  headline.appendChild(message);

};


const createNavBar = function() {
  // const contentDiv = document.querySelector('#content');

  const navBar = document.createElement('div');
  navBar.classList.add('navigation-section');




  // const header = document.createElement('header');
  // header.classList.add('header');
  // navBar.appendChild(header);


  /***** LOGO LINK *****/
  const logoLink = document.createElement('a');
  logoLink.classList.add('logo-link');
  logoLink.href = "index.html";
  navBar.appendChild(logoLink);


  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('logo-img');
  logoLink.appendChild(myIcon);


  const navButtons = document.createElement('nav');
  navBar.appendChild(navButtons);



  /***** HOME PAGE *****/
  const homeButton = document.createElement('button');
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", () => {
    clearPage();
    createHomePage();
  });
  navButtons.appendChild(homeButton);


  /***** MENU PAGE ******/
  const menuButton = document.createElement('button');
  menuButton.textContent = "Menu"
  menuButton.addEventListener("click", () => {
    clearPage();
    createMenuPage();
  });
  navButtons.appendChild(menuButton);




  /***** CONTACt PAGE *****/
  const contactButton = document.createElement('button');
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", () => {
    clearPage();
    createContactPage();
  })
  navButtons.appendChild(contactButton);

  return navBar;

};


export { createHomePage, createNavBar }