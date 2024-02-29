
/* define products */



let productsDom = document.querySelector('.products');
let products = JSON.parse(localStorage.getItem('products'));

let drawProductsUI;
(drawProductsUI = function(products){
    productsDom.innerHTML = products.map(function(item){
        return `
        <div class="product-item" style="${item.isMe === 'Y'? 'border:2px solid darkgreen':''}">
            <img src="${item.imageUrl}" alt="image" class="product-item-img"/>
            <div class="product-item-desc">
                <a onclick = 'saveItemData(${item.id})'>${item.title}</a>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span>
                ${item.isMe === 'Y' && "<button class='edit-product' onclick='editProduct("+item.id+")'>Edit Product</button> <button class='delete-product' onclick='deleteProduct("+item.id+")'>Delete Product</button>" || item.isMe === 'N' && ''}
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick='checkLogedUser(${item.id})'>Add To Cart</button>
                <i class="favorite fa-regular fa-heart" onclick="addToFavorite(${item.id})"></i>
            </div>
        </div>
        `
    }).join('')
})(JSON.parse(localStorage.getItem('products')));

function addToFavorite(id){
    if(localStorage.getItem('username'))
        addToFavorites(id)

    else
        window.location = 'login.html'
}

let favorite = localStorage.getItem('favorite')?JSON.parse(localStorage.getItem('favorite')):[];

function addToFavorites(id){
    let item = products.find(i => i.id === id)
    if(favorite.length===0 || favorite.findIndex(i => i.id===item.id)=== -1){
        favorite.push(item)
        localStorage.setItem('favorite',JSON.stringify(favorite))
    }
        
}

function checkLogedUser (id){
    if(localStorage.getItem('username')){
        addedToCart(id);
    }
    else{
        window.location = 'login.html';
    }
}


function addedToCart(id){
    
    let choosenItem = addItem.find(item => item.id === id)? addItem.find(item => item.id === id):products.find(item => item.id ===id);
    
    if(addItem.findIndex(item => item.id === choosenItem.id )!== -1)
         choosenItem.qty +=1
    else
        addItem = [...addItem,choosenItem];

    localStorage.setItem('productsInCart',JSON.stringify(addItem));
    cartsProducts.innerHTML = ""
    addItem.forEach( item => {
        if(item.qty ===1)
            cartsProducts.innerHTML += `<p>${item.title}</p>`;
        else
            cartsProducts.innerHTML += `<p>${item.title} (${item.qty})</p>`;
    })

    badge.style.display= 'block';
    let cartsProductslength = document.querySelectorAll('.carts-products div p').length;
    badge.innerHTML = cartsProductslength;
}

function saveItemData(id){
    localStorage.setItem('productId',id);
    window.location = 'cartDetails.html';
}
// Search function 

let inputSearch = document.getElementById('search');
inputSearch.addEventListener('keyup',function(e){
    if(e.target.value.trim()=== '')
        drawProductsUI(JSON.parse(localStorage.getItem('products')))
    else
        search(e.target.value.toLowerCase().trim() ,JSON.parse(localStorage.getItem('products')))
})

function search(title, myArray){
    let arr = myArray.filter(item => item.title.indexOf(title)!= -1)
    drawProductsUI(arr);
}


// Filter Products By Size :

let filterSize = document.getElementById('filter-size');
filterSize.addEventListener('change',getFilterSizeValue);

function getFilterSizeValue(e){
    let products = localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):productsDB;
    if(e.target.value !== 'all')
        products = products.filter(i => i.size === e.target.value);
    drawProductsUI(products);
    
}

function editProduct(id){
    localStorage.setItem('editProduct',id);
    window.location = 'editProduct.html';
}

function deleteProduct (id){
    if(window.confirm(`do you want to delete the ${products.find(e => e.id ===id).title} ?!!`)){
        products.splice(id-1,1);
        products.filter(e => e.id >id).forEach(i => i.id = i.id -1);
        drawProductsUI(products);
       localStorage.setItem('products',JSON.stringify(products));  
    }
}
