
let userInfo = document.querySelector('#user_info');
let user = document.querySelector('#user');
let links = document.querySelector('#links');
let logoutBtn = document.querySelector('#logout');
let imageUser = document.getElementById('image_user');

let get_userName = localStorage.getItem('username');

if(get_userName){
    links.remove();
    userInfo.style.display = "flex";
    if(localStorage.getItem('userImage'))
        imageUser.setAttribute('src',localStorage.getItem('userImage'));
    else
        imageUser.setAttribute('src','images/user.png');
    user.innerHTML = get_userName
}

logoutBtn.addEventListener('click',function(e){
    e.preventDefault()
    localStorage.clear();
    setTimeout(()=>{
        window.location = 'register.html';
    },2000)
})

// user Information Menu

let userInfoMenu = document.getElementById('user_info_menu');
let userInfoSousMenu = document.getElementById('user_info_sous_menu');

userInfoMenu.addEventListener('click',showSousMenu);

function showSousMenu(){
    if(userInfoSousMenu.style.display === 'flex')
        userInfoSousMenu.style.display = 'none';
    else
    userInfoSousMenu.style.display = 'flex';
}

// add Product to a reel user

let addBtn = document.querySelector('.create-product-icon');
addBtn.addEventListener('click',addOrNoAdd)
function addOrNoAdd(e){
    if(localStorage.getItem('username'))
        window.location = 'createProduct.html'
    else
        window.location = 'register.html';
}

// language direction //

let language = document.getElementById('language');
let languageSetting = document.getElementById('language_setting');
let languageCheck = document.getElementById('language_check');
let languageEnglish = document.getElementById('language_setting_english');
let languageArabic = document.getElementById('language_setting_arabic');

// Events :

language.addEventListener('click',showLanguageMenu);
languageEnglish.addEventListener('click',changeLanguageToEnglish);
languageArabic.addEventListener('click',changeLanguageToArabic);

// Functions :

if(localStorage.getItem('language')){
    languageCheck.innerHTML = localStorage.getItem('language');
    if(localStorage.getItem('language') === 'EN'){
        document.documentElement.setAttribute('dir','ltr');
    }
    else if(localStorage.getItem('language') === 'AR')
        document.documentElement.setAttribute('dir','rtl');
}
else{
    localStorage.setItem('language',languageCheck.textContent)
}

function showLanguageMenu(e){
    e.preventDefault();
    if(languageSetting.style.display === 'flex')
        languageSetting.style.display = 'none';
    else
        languageSetting.style.display = 'flex';
}

function changeLanguageToArabic(e){
    localStorage.setItem('language','AR');
    languageCheck.innerHTML = localStorage.getItem('language');
    window.location = location.href;
}
function changeLanguageToEnglish(e){
    localStorage.setItem('language','EN');
    languageCheck.innerHTML = localStorage.getItem('language');
    window.location = location.href;
}