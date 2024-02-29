
let username = document.getElementById('username');
let password = document.getElementById('password');
let loginBtn = document.getElementById('sign_in');

let getUser = localStorage.getItem('username');
let getPassword = localStorage.getItem('password');

loginBtn.addEventListener('click',login);

function login(e){
    e.preventDefault();
    if(username.value ==="" || password.value === '')
        alert('please fill Data');
    else{
        if(getUser && getUser.trim() ===username.value.trim() && getPassword && getPassword=== password.value){
            setTimeout(function(){
                window.location = 'index.html';
            },2000)
        }
        else{
            console.log('user or pass is wrong!')
        }
    }
}