let listProductHTML = document.querySelectorAll('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartLink = document.getElementById('a5');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let starter = [];
let mainourse = [];
let dessert = [];
let cart = [];

iconCartLink.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

const addDataToHTML = (menuId, products) => {
    let menuContainer = document.getElementById(menuId);
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML =
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">₹${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
            menuContainer.appendChild(newProduct);

            // Add event listener for Add To Cart button
            newProduct.querySelector('.addCart').addEventListener('click', () => {
                addToCart(product.id);
            });
        });
    }
};

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if (cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    } else if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        cart[positionThisProductInCart].quantity += 1;
    }
    addCartToHTML();
};

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity += item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let productInfo = getProductInfo(item.product_id);
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                <img src="${productInfo.image}">
            </div>
            <div class="name">
                ${productInfo.name}
            </div>
            <div class="totalPrice">₹${productInfo.price * item.quantity}</div>
            <div class="quantity">
                <span class="minus"><</span>
                <span>${item.quantity}</span>
                <span class="plus">></span>
            </div>`;
        });
    }
    iconCartSpan.innerText = totalQuantity;
};

const getProductInfo = (productId) => {
    let allProducts = [...starterProducts, ...mainCourseProducts, ...dessertProducts];
    return allProducts.find(product => product.id == productId);
};

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
});

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity += 1;
                break;

            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                } else {
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
};

const initApp = () => {
    // Fetch Starter Menu
    fetch('starter.json')
        .then(response => response.json())
        .then(data => {
            starterProducts = data;
            addDataToHTML('starterMenu', data);
        })
        .catch(error => console.error('Error fetching starter menu:', error));

    // Fetch Main Course Menu
    fetch('maincourse.json')
        .then(response => response.json())
        .then(data => {
            mainCourseProducts = data;
            addDataToHTML('mainCourseMenu', data);
        })
        .catch(error => console.error('Error fetching main course menu:', error));

    // Fetch Dessert Menu
    fetch('dessert.json')
        .then(response => response.json())
        .then(data => {
            dessertProducts = data;
            addDataToHTML('dessertMenu', data);
        })
        .catch(error => console.error('Error fetching dessert menu:', error));
};

initApp();
