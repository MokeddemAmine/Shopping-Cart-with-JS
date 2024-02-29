// variables 

let inputFile = document.getElementById('upload-image-file');
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let createForm = document.getElementById('create-form');
let productImage;
let productSizeValue;

// Events
inputFile.addEventListener('change',uploadImage);
productSizeSelect.addEventListener('change',getProductSizeValue);
createForm.addEventListener('submit',createProduct);


// Functions

// upload Image function :
function uploadImage(){
    let file = this.files[0];
    console.log(this.files[0])
    let format = ['image/jpeg','image/png']

    if( format.indexOf(file.type) === -1){
        
        alert('type of image not supported')
        this.value = ''
        return;
    }
    if(file.size > 0.5 * 1024 * 1024){
        alert('image not exced more than 512Kb');
        this.value = ''
        return
    }
    getImageBased64(file);
}

function getImageBased64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        productImage = reader.result;
    }

    reader.onerror = function(){
        alert('error !!');
    }
}

// get Product Size value function :
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

// create Product function :

function createProduct(e){
    e.preventDefault();
    let allProduct = JSON.parse(localStorage.getItem('products'));

    if(productName.value && productDesc.value && inputFile.value && productSizeValue){
        let obj = {
            id: allProduct ? allProduct.length + 1 : 1,
            imageUrl: productImage,
            title: productName.value,
            size: productSizeValue,
            desc: productDesc.value,
            qty:1,
            isMe:'Y',
        }
        
        allProduct = allProduct? [...allProduct, obj]: [obj];
        localStorage.setItem('products',JSON.stringify(allProduct));
        productName.value='';
        productDesc.value='';
        productSizeSelect.value = '';
        inputFile.value = ''

        setTimeout(()=> window.location = 'index.html',500);
    }
    else{
        alert('please fill Data');
    }
}

