import { createMenuPage } from './menu';
import { createNavBar, clearPage } from '.';
import bistroImg from './images/bistro.jpg';

const createHomePage = () => {
  clearPage();

  const mainDiv = document.querySelector('#content');

  mainDiv.appendChild(createNavBar());

  /** *** Message on main page **** */
  const home = document.createElement('main');
  home.style.backgroundImage = `url(${bistroImg})`;
  home.style.backgroundSize = 'cover';
  home.style.backgroundPosition = 'left';
  home.classList.add('home-page');
  mainDiv.appendChild(home);

  const message = document.createElement('h1');
  message.textContent = 'Satisfying taste buds since 1921!';
  home.appendChild(message);

  const callToActionContainer = document.createElement('h2');

  const callToActionMessage = document.createElement('p');
  callToActionMessage.textContent = 'Check out our';
  callToActionContainer.appendChild(callToActionMessage);

  const callToActionMenuButton = document.createElement('button');
  callToActionMenuButton.classList.add('menu-link');
  callToActionMenuButton.textContent = 'Menu';
  callToActionMessage.appendChild(callToActionMenuButton);

  home.appendChild(callToActionContainer);

  /** *** FOOTER **** */
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const addressContainer = document.createElement('div');
  addressContainer.classList.add('address-section');
  footer.appendChild(addressContainer);

  const addressHeader = document.createElement('h2');
  addressHeader.textContent = 'Find Us';
  addressContainer.appendChild(addressHeader);

  const street = document.createElement('p');
  street.textContent = '3224 Street Blvd';
  addressContainer.appendChild(street);

  const cityState = document.createElement('p');
  cityState.textContent = 'City, State';
  addressContainer.appendChild(cityState);

  const zipCode = document.createElement('p');
  zipCode.textContent = 'Zip Code';
  addressContainer.appendChild(zipCode);

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '000-000-0000';
  addressContainer.appendChild(phoneNumber);

  const operatingHoursContainer = document.createElement('div');
  operatingHoursContainer.classList.add('operating-hours');
  footer.appendChild(operatingHoursContainer);

  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'Hours';
  operatingHoursContainer.appendChild(hoursHeader);

  const monFriHours = document.createElement('p');
  const monFriSpan = document.createElement('span');
  monFriSpan.textContent = 'Monday - Friday:';
  monFriHours.appendChild(monFriSpan);
  const monFriHoursOpen = document.createTextNode(' 10:00 am - 11:00 pm');
  monFriHours.appendChild(monFriHoursOpen);
  operatingHoursContainer.appendChild(monFriHours);

  const satHours = document.createElement('p');
  const satSpan = document.createElement('span');
  satSpan.textContent = 'Saturday:';
  satHours.appendChild(satSpan);
  const satHoursOpen = document.createTextNode(' 9:00 am - 11:30 pm');
  satHours.appendChild(satHoursOpen);
  operatingHoursContainer.appendChild(satHours);

  const sunHours = document.createElement('p');
  const sunSpan = document.createElement('span');
  sunSpan.textContent = 'Sunday:';
  sunHours.appendChild(sunSpan);
  const sunHoursOpen = document.createTextNode(' 9:00 am - 9:00 pm');
  sunHours.appendChild(sunHoursOpen);
  operatingHoursContainer.appendChild(sunHours);

  mainDiv.appendChild(footer);

  const menuLink = document.querySelector('.menu-link');
  menuLink.addEventListener('click', createMenuPage);
};

export { createHomePage };
