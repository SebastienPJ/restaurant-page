import { createNavBar, clearPage } from '.';
import menuImg from './images/menu.jpg';
import mainDishImg from './images/main-dish-header.jpg';
import dessertImg from './images/dessert-header.jpg';
import drinksHeaderImg from './images/drinks-header.jpg';

const createMenuPage = () => {
  clearPage();

  const contentDiv = document.querySelector('#content');

  contentDiv.appendChild(createNavBar());

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu');
  menuContainer.innerHTML = ` 
    <header class="menu-header">
        <h1>Menu</h1>
    </header>

    <div class="menu-display">
        <button type="button" class="breakfast">Breakfast</button>
        <button type="button" class="main-dishes">Main</button>
        <button type="button" class="dessert">Dessert</button>
        <button type="button" class="drinks">Drinks/Cocktails</button>


        <div class="menu-items">
            <h2>Breakfast Menu</h2>

            <div class="row">
                <div class="item">
                    <div class="description">
                        <p class="food-name">Avocado Toast</p>
                        <p>facilisi etiam dignissim diam quis enim</p>
                    </div>
                    <img src="./img/avocavo-toast.png" alt="toast-image">
                </div>

                <div class="item">
                    <div class="description">
                        <p class="food-name">Pancakes</p>
                        <p>ut tortor pretium viverra suspendisse potenti</p>
                    </div>
                    <img src="./img/pancakes.jpg" alt="pancakes image">
                </div>
            </div>

            <div class="row">
                <div class="item">
                    <div class="description">
                        <p class="food-name">Breakfast Platter</p>
                        <p>viverra orci sagittis eu volutpat odio</p>
                    </div>
                    <img src="./img/breakfast-platter.jpg" alt="breakfast-platter image">
                </div>

                <div class="item">
                    <div class="description">
                        <p class="food-name">Classic Eggs</p>
                        <p>feugiat vivamus at augue eget arcu</p>
                    </div>
                    <img src="./img/classic-eggs.jpg" alt="classic-eggs image">
                </div>
            </div>
        </div>
    </div>`;

  contentDiv.appendChild(menuContainer);

  const menuHeader = document.querySelector('.menu-header');
  menuHeader.style.backgroundImage = `url(${menuImg})`;

  const menuItems = document.querySelector('.menu-items');

  const breakfastButton = document.querySelector('.breakfast');
  breakfastButton.addEventListener('click', () => {
    menuHeader.style.backgroundImage = `url(${menuImg})`;

    menuItems.innerHTML = `            
        <h2>Breakfast Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p class="food-name">Avocado Toast</p>
                    <p>facilisi etiam dignissim diam quis enim</p>
                </div>
                <img src="./img/avocavo-toast.png" alt="toast-image">
            </div>

            <div class="item">
                <div class="description">
                    <p class="food-name">Pancakes</p>
                    <p>ut tortor pretium viverra suspendisse potenti</p>
                </div>
                <img src="./img/pancakes.jpg" alt="pancakes image">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p class="food-name">Breakfast Platter</p>
                    <p>viverra orci sagittis eu volutpat odio</p>
                </div>
                <img src="./img/breakfast-platter.jpg" alt="breakfast-platter image">
            </div>

            <div class="item">
                <div class="description">
                    <p class="food-name">Classic Eggs</p>
                    <p>feugiat vivamus at augue eget arcu</p>
                </div>
                <img src="./img/classic-eggs.jpg" alt="classic-eggs image">
            </div>
        </div>`;
  });

  const mainDishButton = document.querySelector('.main-dishes');
  mainDishButton.addEventListener('click', () => {
    menuHeader.style.backgroundImage = `url(${mainDishImg})`;

    menuItems.innerHTML = `            
        <h2>Main Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p class="food-name">Lamb Chops</p>
                    <p>nunc sed velit dignissim sodales ut</p>
                </div>
                <img src="./img/lamb-chops.jpg" alt="lamb-image">
            </div>

            <div class="item">
                <div class="description">
                    <p class="food-name">House Salad</p>
                    <p>nec tincidunt praesent semper feugiat nibh</p>
                </div>
                <img src="./img/house-salad.jpg" alt="house-salad image">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p class="food-name">Famous Burger</p>
                    <p>aliquet enim tortor at auctor urna</p>
                </div>
                <img src="./img/famous-burger.jpg" alt="burger-image">
            </div>

            <div class="item">
                <div class="description">
                    <p class="food-name">Soup for the Soul</p>
                    <p>donec enim diam vulputate ut pharetra</p>
                </div>
                <img src="./img/soup-for-the-soul.jpg" alt="soup-image">
            </div>
        </div>`;
  });

  const dessertButton = document.querySelector('.dessert');
  dessertButton.addEventListener('click', () => {
    menuHeader.style.backgroundImage = `url(${dessertImg})`;

    menuItems.innerHTML = `        
        <h2>Dessert Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p class="food-name">Brownie</p>
                    <p>sagittis id consectetur purus ut faucibus</p>
                </div>
                <img src="./img/brownie.jpg" alt="brownie-image">
            </div>

            <div class="item">
                <div class="description">
                    <p class="food-name">Icecream Cake</p>
                    <p>eu tincidunt tortor aliquam nulla facilisi</p>
                </div>
                <img src="./img/ice-cream-cake.jpg" alt="ice-cream image">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p class="food-name">Cheesecake</p>
                    <p>vitae aliquet nec ullamcorper sit amet</p>
                </div>
                <img src="./img/cheesecake.jpg" alt="cheese-cake image">
            </div>

            <div class="item">
                <div class="description">
                    <p class="food-name">House Delight</p>
                    <p>commodo viverra maecenas accumsan lacus vel</p>
                </div>
                <img src="./img/house-delight.jpg" alt="House-Delight Image">
            </div>
        </div>`;
  });

  const drinksButton = document.querySelector('.drinks');
  drinksButton.addEventListener('click', () => {
    menuHeader.style.backgroundImage = `url(${drinksHeaderImg})`;

    menuItems.innerHTML = `        
        <h2>Drinks Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p class="food-name">Beer</p>
                    <p>nisi porta lorem mollis aliquam ut</p>
                </div>
                <img src="./img/beer.jpg" alt="beer image">
            </div>

            <div class="item">
                <div class="description">
                    <p class="food-name">Wine</p>
                    <p>elit sed vulputate mi sit amet</p>
                </div>
                <img src="./img/wine.jpg" alt="wine image">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p class="food-name">Cocktails</p>
                    <p>nunc lobortis mattis aliquam faucibus purus</p>
                </div>
                <img src="./img/cocktails.jpg" alt="cocktail image">
            </div>

            <div class="item">
                <div class="description">
                    <p class="food-name">Non-alcoholic</p>
                    <p>vitae auctor eu augue ut lectus</p>
                </div>
                <img src="./img/juice.jpg" alt="Juice image">
            </div>
        </div>`;
  });
};

export { createMenuPage };
