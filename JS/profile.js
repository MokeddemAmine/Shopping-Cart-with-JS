
// variables of the page
let username = document.getElementById('username');
let email = document.getElementById('email');
let productLenght = document.getElementById('product_length');
let userImage = document.getElementById('user_image');

// variables of get from local Storage:

let get_username = localStorage.getItem('username');
let get_email = localStorage.getItem('email');
let get_productLength = JSON.parse(localStorage.getItem('products')).filter(e => e.isMe === 'Y').length;

if(localStorage.getItem('userImage'))
    userImage.setAttribute('src',localStorage.getItem('userImage'))
else
    userImage.setAttribute('src','images/user.png')
username.innerHTML = get_username;
email.innerHTML = get_email;
productLenght.innerHTML = get_productLength;

// Go to edit profile page
function editProfile(){
    window.location = 'editProfile.html';
}
function editPassword(){
    window.location = 'editPassword.html';
}
