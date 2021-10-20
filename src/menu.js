import { createNavBar } from "./home";



const createMenuPage = function() {
    console.log("menu Page created")

    const contentDiv = document.querySelector('#content');

    contentDiv.appendChild(createNavBar());

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    menuContainer.innerHTML = ` 
    <header>
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
                    <img src="./img/avocavo-toast.jpg" alt="toast-image" class="toast">
                </div>

                <div class="item">
                    <div class="description">
                        <p>pancakes</p>
                        <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                    </div>
                    <img src="./img/pancakes.jpg" alt="pancakes" class="toast">
                </div>
            </div>

            <div class="row">
                <div class="item">
                    <div class="description">
                        <p>House Eggs</p>
                        <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                    </div>
                    <img src="./img/eggs.jpg" alt="eggs" class="toast">
                </div>

                <div class="item">
                    <div class="description">
                        <p>Classic Eggs</p>
                        <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                    </div>
                    <img src="./img/eggs1.jpg" alt="eggs1" class="toast">
                </div>
            </div>
        </div>
    </div>`


    contentDiv.appendChild(menuContainer);


    const menuItems = document.querySelector(".menu-items");

    const breakfastButton = document.querySelector('.breakfast');
    breakfastButton.addEventListener('click', () => {
        console.log("Breakfast time!")
        menuItems.innerHTML = `            
        <h2>Breakfast Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Avocado Toast</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/avocavo-toast.jpg" alt="toast-image" class="toast">
            </div>

            <div class="item">
                <div class="description">
                    <p>pancakes</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/pancakes.jpg" alt="pancakes" class="toast">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>House Eggs</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/eggs.jpg" alt="eggs" class="toast">
            </div>

            <div class="item">
                <div class="description">
                    <p>Classic Eggs</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/eggs1.jpg" alt="eggs1" class="toast">
            </div>
        </div>`

        // showSelectedMenu("breakfast");
    });

    const mainDishButton = document.querySelector('.main-dishes');
    mainDishButton.addEventListener('click', () => {
        console.log("Main dish is served!");

        menuItems.innerHTML = `            
        <h2>Main Dishes</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Lamb Chops</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/lamb.jpg" alt="lamb-image" class="lamb">
            </div>

            <div class="item">
                <div class="description">
                    <p>House Salad</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/salad.jpg" alt="pancakes" class="salad">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Famous Burger</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/burger.jpg" alt="eggs" class="toast">
            </div>

            <div class="item">
                <div class="description">
                    <p>Soup for the Soul</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/soup.jpg" alt="eggs1" class="toast">
            </div>
        </div>`


    });


    const dessertButton = document.querySelector('.dessert');
    dessertButton.addEventListener('click', () => {
        console.log("Getting our sweet tooth on!")

        menuItems.innerHTML = `        
        <h2>Dessert Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Brownie</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/brownie.jpg" alt="lamb-image" class="brownie">
            </div>

            <div class="item">
                <div class="description">
                    <p>Icecream Cake</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/icecreamcake.jpg" alt="pancakes" class="cake">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Cheesecake</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/cheesecake.jpg" alt="eggs" class="cheesecake">
            </div>

            <div class="item">
                <div class="description">
                    <p>House Delight</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/delight.jpg" alt="eggs1" class="toast">
            </div>
        </div>`
    });


    const drinksButton = document.querySelector(".drinks");
    drinksButton.addEventListener('click', () => {
        console.log('Party Time!!!')

        menuItems.innerHTML = `        
        <h2>Drinks Menu</h2>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Beer</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/beer.jpg" alt="lamb-image" class="beer">
            </div>

            <div class="item">
                <div class="description">
                    <p>Wine</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/wine.jpg" alt="pancakes" class="wine">
            </div>
        </div>

        <div class="row">
            <div class="item">
                <div class="description">
                    <p>Cocktails</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/cocktails.jpg" alt="eggs" class="cocktails">
            </div>

            <div class="item">
                <div class="description">
                    <p>Non-alcoholic</p>
                    <p>aksjf ;akjsdflaskjdf kjasdkfaskjfs</p>
                </div>
                <img src="./img/juice.jpg" alt="eggs1" class="juice">
            </div>
        </div>`
    })


}; 





export { createMenuPage }


