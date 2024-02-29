// New Variables:
let products = localStorage.getItem('products')? JSON.parse(localStorage.getItem('products')):productsDB;
let myEditProductId = JSON.parse(localStorage.getItem('editProduct'));
let myEditProduct = products.find(i => i.id === myEditProductId);

// variables:
let inputFile = document.getElementById('upload-image-file');
let productName = document.getElementById('product-name');
let productDesc = document.getElementById('product-desc');
let productSizeSelect = document.getElementById('product-size');
let updateForm = document.getElementById('update-form');

productName.value = myEditProduct.title;
productDesc.value = myEditProduct.desc;
productSizeSelect.value = myEditProduct.size;


// Events
inputFile.addEventListener('change',uploadImage);
productSizeSelect.addEventListener('change',getProductSizeValue);
updateForm.addEventListener('submit',updateProduct);


// Functions

// upload Image function :
function uploadImage(){
    let file = this.files[0];
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
        myEditProduct.imageUrl = reader.result;
    }

    reader.onerror = function(){
        alert('error !!');
    }
}

// get Product Size value function :
function getProductSizeValue(e){
    myEditProduct.size = e.target.value;
}

// create Product function :

function updateProduct(e){
    e.preventDefault();

    if(productName.value && productDesc.value && inputFile.value && myEditProduct.size){
        myEditProduct.title = productName.value;
        myEditProduct.desc = productDesc.value;
        localStorage.setItem('products',JSON.stringify(products));
        
        setTimeout(()=> window.location = 'index.html',500);
    }
    else{
        alert('please fill Data');
    }
}

