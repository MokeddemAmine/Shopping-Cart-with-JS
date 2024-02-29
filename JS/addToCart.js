let cartsProducts = document.querySelector('.carts-products div');
let badge = document.querySelector('.badge');

let addItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')):[];

if(addItem){
    addItem.forEach( item => {
        if(item.qty ===1)
            cartsProducts.innerHTML += `<p>${item.title}</p>`;
        else
            cartsProducts.innerHTML += `<p>${item.title} (${item.qty})</p>`;
    })
    if(addItem.length !== 0){
        badge.style.display = 'block';
        badge.innerHTML = addItem.length;
    }
}

let shoppingCart = document.querySelector('.shopping-cart');
shoppingCart.addEventListener('click',openCartMenu);


let cartsProductsMenu = document.querySelector('.carts-products');

function openCartMenu (){
    if(cartsProducts.innerHTML !=''){
        if(cartsProductsMenu.style.display == 'block'){
            cartsProductsMenu.style.display = 'none';
        }
        else{
            cartsProductsMenu.style.display= 'block';
        }
    } 
}

///////////// favorite /////////////
let favIcon = document.querySelectorAll('.favorite');
if(favIcon.length !==0)
favIcon.forEach(item => item.addEventListener('click', e => {
    e.target.style.color = 'red';
}))

if(JSON.parse(localStorage.getItem('favorite'))){
    if(favIcon.length !==0)
    JSON.parse(localStorage.getItem('favorite')).forEach(item => favIcon[item.id-1].style.color = 'red')
}

