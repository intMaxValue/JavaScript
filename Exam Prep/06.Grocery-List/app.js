window.addEventListener('load', solve);

function solve () {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'

    const inputs = {
        product: document.querySelector('#product'),
        count: document.querySelector('#count'),
        price: document.querySelector('#price'),
    }

    

    const addProductBtn = document.querySelector(`#add-product`);
    const updateProductBtn = document.querySelector(`#update-product`);
    const loadAllProductsBtn = document.querySelector(`#load-product`);


}