import './styles.css'
import { createMenuPage } from './menu';
import { createContactPage } from './contact'
import Icon from './images/logo.png'



const createHomePage = function() {

    // clearPage();
  
  
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
    callToAction.textContent = 'Check out our ';

    const actionButton = document.createElement('button');
    actionButton.classList.add('menu-link');
    actionButton.addEventListener('click', createMenuPage)
    actionButton.textContent = "Menu";
    callToAction.appendChild(actionButton);


    home.appendChild(callToAction);
  
  
    /***** FOOTER *****/
    const footer = document.createElement('footer');
    footer.classList.add('footer');



    const addressSection = document.createElement('div');
    addressSection.classList.add('address-section');

    const addressHeader = document.createElement('h2');
    addressHeader.textContent = 'Find us';
    addressSection.appendChild(addressHeader);

    const addressStreet = document.createElement('p');
    addressStreet.textContent = '3224 Street Blvd';
    addressSection.appendChild(addressStreet);

    const addressCity = document.createElement('p');
    addressCity.textContent = 'Dallas, TX 09834';
    addressSection.appendChild(addressCity);


    const addressPhone = document.createElement('p');
    addressPhone.textContent = "000-000-0000";
    addressSection.appendChild(addressPhone);


    footer.appendChild(addressSection);





    const operatingHours = document.createElement('div');
    operatingHours.classList.add('operating-hours');


    const operatingHeader = document.createElement('h2');
    operatingHeader.textContent = 'Hours';
    operatingHours.appendChild(operatingHeader);
    
    const operatingTimeWeekday = document.createElement('p');
    const MondayFridaySpan = document.createElement('span');
    MondayFridaySpan.textContent = 'Monday - Friday:';
    MondayFridaySpan.classList.add('days-open')
    operatingTimeWeekday.appendChild(MondayFridaySpan);

    const operatingTimeMF = document.createElement('span');
    operatingTimeMF.textContent = ' 10:00 am - 11:00 pm';
    operatingTimeWeekday.appendChild(operatingTimeMF);

    operatingHours.appendChild(operatingTimeWeekday);




    const operatingTimeWeekend = document.createElement('p');
    const saturdaySpan = document.createElement('span');
    saturdaySpan.textContent = 'Saturday - Sunday:';
    saturdaySpan.classList.add('days-open')
    operatingTimeWeekend.appendChild(saturdaySpan);

    const operatingTimeSat = document.createElement('span');
    operatingTimeSat.textContent = ' 11:00 am - 2:00 am';
    operatingTimeWeekend.appendChild(operatingTimeSat);

    operatingHours.appendChild(operatingTimeWeekend);




    footer.appendChild(operatingHours);




  
    mainDiv.appendChild(footer);
  
  
  
};


const createNavBar = function() {
    const contentDiv = document.querySelector('#content');
  
    const navBar = document.createElement('nav');
    navBar.classList.add('navbar');
    contentDiv.appendChild(navBar);
    
  
    const brandContainer = document.createElement('div');
    brandContainer.classList.add('logo-container');
    navBar.appendChild(brandContainer);

    const logoLink = document.createElement('a');
    logoLink.href = "index.html";
    brandContainer.appendChild(logoLink);

    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('company-logo');
    logoLink.appendChild(myIcon);




    const toggleMenu = document.createElement('a');
    toggleMenu.classList.add('toggle-menu')
    toggleMenu.href = '#';
    navBar.appendChild(toggleMenu);

    const bar1 = document.createElement('div');
    bar1.classList.add('bar');
    toggleMenu.appendChild(bar1);

    const bar2 = document.createElement('div');
    bar2.classList.add("bar");
    toggleMenu.appendChild(bar2);

    const bar3 = document.createElement('div');
    bar3.classList.add('bar');
    toggleMenu.appendChild(bar3);




    const navLinks = document.createElement('div');
    navLinks.classList.add('nav-links');
    navBar.appendChild(navLinks);


    const unorderedList = document.createElement("ul");
    navLinks.appendChild(unorderedList);


    const firstLink = document.createElement('li');
    unorderedList.appendChild(firstLink);

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    // homeButton.addEventListener("click", createHomePage);
    firstLink.appendChild(homeButton);



    const secondLink = document.createElement('li');
    unorderedList.appendChild(secondLink);

    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu"
    // menuButton.addEventListener("click", createMenuPage);
    secondLink.appendChild(menuButton);



    const thirdLink = document.createElement('li');
    unorderedList.appendChild(thirdLink);

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    // contactButton.addEventListener("click", createContactPage);
    thirdLink.appendChild(contactButton);



    const dropDownMenu = document.querySelector('.toggle-menu');
    const navBarLinks = document.querySelector('.nav-links');


    dropDownMenu.addEventListener('click', () => {
        navBarLinks.classList.toggle('open-menu');
    })


    return navBar;
  
};


const clearPage = function() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    content.removeAttribute('style');
};




createHomePage();




  
export { createNavBar, clearPage }

