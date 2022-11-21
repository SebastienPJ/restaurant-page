import './styles.css';
import {createHomePage} from './home.js';
import { createMenuPage } from './menu';
import { createContactPage } from './contact';
import Icon from './images/logo.png';

const clearPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = '';
  content.removeAttribute('style');
};

const createNavBar = () => {
  const contentDiv = document.querySelector('#content');

  const navBar = document.createElement('nav');
  navBar.classList.add('navbar');
  contentDiv.appendChild(navBar);

  const brandContainer = document.createElement('div');
  brandContainer.classList.add('logo-container');
  navBar.appendChild(brandContainer);

  const logoLink = document.createElement('a');
  logoLink.href = 'index.html';
  brandContainer.appendChild(logoLink);

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('company-logo');
  logoLink.appendChild(myIcon);

  const toggleMenu = document.createElement('a');
  toggleMenu.classList.add('toggle-menu');
  toggleMenu.href = '#';
  navBar.appendChild(toggleMenu);

  const bar1 = document.createElement('div');
  bar1.classList.add('bar');
  toggleMenu.appendChild(bar1);

  const bar2 = document.createElement('div');
  bar2.classList.add('bar');
  toggleMenu.appendChild(bar2);

  const bar3 = document.createElement('div');
  bar3.classList.add('bar');
  toggleMenu.appendChild(bar3);

  const navLinks = document.createElement('div');
  navLinks.classList.add('nav-links');
  navBar.appendChild(navLinks);

  const unorderedList = document.createElement('ul');
  navLinks.appendChild(unorderedList);

  const firstLink = document.createElement('li');
  unorderedList.appendChild(firstLink);

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', createHomePage);
  firstLink.appendChild(homeButton);

  const secondLink = document.createElement('li');
  unorderedList.appendChild(secondLink);

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', createMenuPage);
  secondLink.appendChild(menuButton);

  const thirdLink = document.createElement('li');
  unorderedList.appendChild(thirdLink);

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', createContactPage);
  thirdLink.appendChild(contactButton);

  const dropDownMenu = document.querySelector('.toggle-menu');
  const navBarLinks = document.querySelector('.nav-links');

  dropDownMenu.addEventListener('click', () => {
    navBarLinks.classList.toggle('open-menu');
  });

  return navBar;
};

createHomePage();

export { createNavBar, clearPage };
