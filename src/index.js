import './styles.css'
import {createHomePage} from './home.js'
import { createMenuPage } from './menu';
import { createContactPage } from './contact'
import Icon from './images/logo.png'


const clearPage = function() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.removeAttribute('style');
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
    homeButton.addEventListener("click", createHomePage);
    navButtons.appendChild(homeButton);
  
  
    /***** MENU PAGE ******/
    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu"
    menuButton.addEventListener("click", createMenuPage);
    navButtons.appendChild(menuButton);
  
  
  
  
    /***** CONTACT PAGE *****/
    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", createContactPage);
    navButtons.appendChild(contactButton);
  
    return navBar;
  
}


console.log("Welcome to Cloud 9 Bistro");

createHomePage();










  
export { createNavBar, clearPage }

