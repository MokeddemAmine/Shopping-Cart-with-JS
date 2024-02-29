let productsDom = document.querySelector('.products');
let noProducts = document.querySelector('.noProducts');
let products = localStorage.getItem('products')? JSON.parse(localStorage.getItem('products')):productsDB;
let myProducts = products.filter(e => e.isMe === 'Y')

let drawProductsUI;
(drawProductsUI = function(products){
    if(myProducts.length === 0){
        noProducts.innerHTML = '<p>there are no item!!! </p>';
    }
    productsDom.innerHTML = products.map(function(item){
        return `
        <div class="product-item" style="${item.isMe === 'Y'? 'border:2px solid darkgreen':''}">
            <img src="${item.imageUrl}" alt="image" class="product-item-img"/>
            <div class="product-item-desc">
                <a onclick = 'saveItemData(${item.id})'>${item.title}</a>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span>
                <button class='edit-product' onclick='editProduct(${item.id})'>Edit Product</button> 
                <button class='delete-product' onclick='deleteProduct(${item.id})'>Delete Product</button>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick='checkLogedUser(${item.id})'>Add To Cart</button>
                <i class="favorite fa-regular fa-heart" onclick="addToFavorite(${item.id})"></i>
            </div>
        </div>
        `
    }).join('')
})(myProducts);

function editProduct(id){
    localStorage.setItem('editProduct',id);
    window.location = 'editProduct.html';
}

function deleteProduct (id){
    if(window.confirm(`do you want to delete the ${products.find(e => e.id ===id).title} ?!!`)){
        products.splice(id-1,1);
        products.filter(e => e.id >id).forEach(i => i.id = i.id -1);
        myProducts = products.filter(e => e.isMe === "Y");
        drawProductsUI(myProducts);
       localStorage.setItem('products',JSON.stringify(products));  
    }
}