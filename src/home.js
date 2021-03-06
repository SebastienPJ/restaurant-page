import { createMenuPage } from "./menu";
import { createNavBar } from ".";
import { clearPage } from ".";




const createHomePage = function() {

  clearPage();


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


  const callToAction = document.createElement('h2');
  callToAction.innerHTML = 'Check out our <button class="menu-link">Menu</button>';
  home.appendChild(callToAction);


  /***** FOOTER *****/
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


  const menuLink = document.querySelector('.menu-link');
  menuLink.addEventListener('click', createMenuPage)

};




export { createHomePage }