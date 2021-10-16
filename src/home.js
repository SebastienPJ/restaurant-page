import backgroundImage from "./back-rice.jpeg"
import Icon from "./icon.png";

const clearPage = function() {
  const content = document.querySelector('#content');
  content.textContent = "";
}

const createMenuPage = function() {
  createNavBar();
  console.log("menu Page created")
}




const createHomePage = function() {
  createNavBar();

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
  // contentDiv.style.backgroundImage = "url('./37088b799fb384b95bc0.jpeg')"
  // contentDiv.style.background = "url('./src/back-rice.jpeg') no-repeat fixed center";
  // contentDiv.style.backgroundSize = "cover";


  const header = document.createElement('header');
  header.classList.add('header');
  contentDiv.appendChild(header);



  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo-div');
  header.appendChild(logoDiv);


  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('logo-img');
  logoDiv.appendChild(myIcon);


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
  navBar.appendChild(contactButton);

};


export { createHomePage }