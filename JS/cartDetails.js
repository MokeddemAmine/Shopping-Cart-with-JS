let products = JSON.parse(localStorage.getItem('products'));
let productId = localStorage.getItem('productId');

let productDetails = products.find(item => item.id ==productId)

let itemDetails = document.querySelector('.item-details');

itemDetails.innerHTML = `
    <img src="${productDetails.imageUrl}" alt="image"/>
    <h2> ${productDetails.title}</h2>
    <p> ${productDetails.desc}</p>
    <span>Size : ${productDetails.size}</span><br/>
    <span>Quantities : ${productDetails.qty}</span>
`;