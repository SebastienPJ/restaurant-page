import { createNavBar } from "./home";



const createMenuPage = function() {
    console.log("menu Page created")

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
        <button type="button" class="main-dishes">Main Dishes</button>
        <button type="button" class="dessert">Dessert</button>
        <button type="button" class="drinks">Drinks/Cocktails</button>


        <div class="menu-items">
            <h2>Breakfast Menu</h2>

            <div class="row">
                <div class="item">
                    <div class="description">
                        <p>Avocado Toast</p>
                        <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                    </div>
                    <img src="./img/avocavo-toast.png" alt="toast-image">
                </div>

                <div class="item">
                    <div class="description">
                        <p>pancakes</p>
                        <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                    </div>
                    <img src="./img/pancakes.jpg" alt="pancakes image">
                </div>
            </div>

            <div class="row">
                <div class="item">
                    <div class="description">
                        <p>House Eggs</p>
                        <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                    </div>
                    <img src="./img/house-eggs.jpg" alt="house-eggs image">
                </div>

                <div class="item">
                    <div class="description">
                        <p>Classic Eggs</p>
                        <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                    </div>
                    <img src="./img/classic-eggs.jpg" alt="classic-eggs image">
                </div>
            </div>
        </div>
    </div>`





    contentDiv.appendChild(menuContainer);


    const menuHeader = document.querySelector('.menu-header');
    menuHeader.style.backgroundImage = "url('./img/menu.jpg')";
    // headline.style.backgroundSize = 'cover';
    // headline.style.backgroundPosition = 'center'





    const menuItems = document.querySelector(".menu-items");

    const breakfastButton = document.querySelector('.breakfast');
    breakfastButton.addEventListener('click', () => {
        console.log("Breakfast time!")
        menuHeader.style.backgroundImage = "url('./img/menu.jpg')";



        menuItems.innerHTML = `            
        <h2>Breakfast Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Avocado Toast</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/avocavo-toast.png" alt="toast-image">
            </div>

            <div class="item">
                <div class="description">
                    <p>pancakes</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/pancakes.jpg" alt="pancakes image">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>House Eggs</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/house-eggs.jpg" alt="house-eggs image">
            </div>

            <div class="item">
                <div class="description">
                    <p>Classic Eggs</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/classic-eggs.jpg" alt="classic-eggs image">
            </div>
        </div>`

        // showSelectedMenu("breakfast");
    });




    const mainDishButton = document.querySelector('.main-dishes');
    mainDishButton.addEventListener('click', () => {
        console.log("Main dish is served!");
        

        menuHeader.style.backgroundImage = "url('./img/main-dish-header.jpg')";


        menuItems.innerHTML = `            
        <h2>Main Dishes</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Lamb Chops</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/lamb-chops.jpg" alt="lamb-image">
            </div>

            <div class="item">
                <div class="description">
                    <p>House Salad</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/house-salad.jpg" alt="house-salad image">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Famous Burger</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/famous-burger.jpg" alt="burger-image">
            </div>

            <div class="item">
                <div class="description">
                    <p>Soup for the Soul</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/soup-for-the-soul.jpg" alt="soup-image">
            </div>
        </div>`


    });


    const dessertButton = document.querySelector('.dessert');
    dessertButton.addEventListener('click', () => {
        console.log("Getting our sweet tooth on!")

        menuHeader.style.backgroundImage = "url('./img/dessert-header.jpg')";


        menuItems.innerHTML = `        
        <h2>Dessert Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Brownie</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/brownie.jpg" alt="brownie-image">
            </div>

            <div class="item">
                <div class="description">
                    <p>Icecream Cake</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/ice-cream-cake.jpg" alt="ice-cream image">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Cheesecake</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/cheesecake.jpg" alt="cheese-cake image">
            </div>

            <div class="item">
                <div class="description">
                    <p>House Delight</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/house-delight.jpg" alt="House-Delight Image">
            </div>
        </div>`
    });


    const drinksButton = document.querySelector(".drinks");
    drinksButton.addEventListener('click', () => {
        console.log('Party Time!!!')


        menuHeader.style.backgroundImage = "url('./img/drinks-header.jpg')";



        menuItems.innerHTML = `        
        <h2>Drinks Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Beer</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/beer.jpg" alt="beer image">
            </div>

            <div class="item">
                <div class="description">
                    <p>Wine</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/wine.jpg" alt="wine image">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Cocktails</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/cocktails.jpg" alt="cocktail image">
            </div>

            <div class="item">
                <div class="description">
                    <p>Non-alcoholic</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/juice.jpg" alt="Juice image">
            </div>
        </div>`
    })


}; 





export { createMenuPage }


