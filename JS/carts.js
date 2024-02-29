let productsInCart = localStorage.getItem('productsInCart');
let productsDom = document.querySelector('.products');
let noProducts = document.querySelector('.noProducts')

if(productsInCart){
    let items = JSON.parse(productsInCart)
    drawProductsUI(items)
}

function drawProductsUI(products){
    if(products.length === 0){
        noProducts.innerHTML = "There is no items!!";
    }
    let productsUI = products.map(function(item){
        return `
        <div class="product-item">
            <img src="${item.imageUrl}" alt="image" class="product-item-img"/>
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span>
                <span>Quatities : ${item.qty}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick='removeFromCart(${item.id})'>Remove From Cart</button>
            </div>
        </div>
        `
    });
    productsDom.innerHTML = productsUI.join('');
}

function removeFromCart(id){
    if(window.confirm('are you sure to delete the item ?!!')){
        if(productsInCart){
            productsInCart = JSON.parse(productsInCart);
            productsInCart = productsInCart.filter((item => item.id !==id));
            drawProductsUI(productsInCart)
            productsInCart = JSON.stringify(productsInCart);
            localStorage.setItem('productsInCart',productsInCart)
            window.location = 'cartproducts.html';
        }
    }
}