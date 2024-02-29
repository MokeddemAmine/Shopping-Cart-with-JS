let favorite = localStorage.getItem('favorite');
let productsDom = document.querySelector('.products');
let noProducts = document.querySelector('.noProducts')

if(favorite){
    let items = JSON.parse(favorite)
    drawProductsUI(items)
}

function drawProductsUI(products){
    if(products.length === 0){
        noProducts.innerHTML = "There is no favorite Items!!";
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
                <button class="add-to-cart" onclick='removeFromFavorite(${item.id})'>Remove From Favorite</button>
            </div>
        </div>
        `
    });
    productsDom.innerHTML = productsUI.join('');
}

function removeFromFavorite(id){
    let newFavorite = favorite?JSON.parse(favorite).filter(i => i.id !== id):[];
    localStorage.setItem('favorite',JSON.stringify(newFavorite));
    favorite = localStorage.getItem('favorite');
    drawProductsUI(newFavorite)
}