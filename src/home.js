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
  const home = document.createElement('main');
  home.style.backgroundImage = "url('./img/bistro.jpg')";
  home.style.backgroundSize = 'cover';
  home.style.backgroundPosition = 'left';
  home.classList.add('home-page');



  mainDiv.appendChild(home);

  const message = document.createElement('h1');
  message.textContent = "Satisfying taste buds since 1921!";
  home.appendChild(message);



  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
    <div class="address-section">
      <h2>Find us</h2>
      <p>3224 Street Blvd</p>
      <p>City, State</p>
      <p>Zip Code</p>
      <p>000-000-0000</p>
    </div>


    <div class="operating-hours">
      <h2> Hours</h2>
      <p> <span>Monday - Friday:</span> 10:00 am - 11:00 pm</p>
      <p> <span>Saturday:</span> 9:00 am - 11:30 pm</p>
      <p> <span>Sunday</span> 9:00 am - 9:00 pm</p>

    </div>

  </div> `

  mainDiv.appendChild(footer);

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