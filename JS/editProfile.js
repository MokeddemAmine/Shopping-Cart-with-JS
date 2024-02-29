
// variables in the html page 
let userImage = document.getElementById('user_image');
let userImageFile = document.getElementById('user_image_file');
let userNameEdit = document.getElementById('username');
let emailEdit = document.getElementById('email');

let editProfileInfo = document.getElementById('edit_profile_info');

// variables in the local Storage
let get_email = localStorage.getItem('email');

//show data of user
userNameEdit.value = get_userName;
emailEdit.value = get_email;
if(localStorage.getItem('userImage'))
    userImage.setAttribute('src',localStorage.getItem('userImage'))
else
    userImage.setAttribute('src','images/user.png')

// Events
userImageFile.addEventListener('change',changeUserImage);
editProfileInfo.addEventListener('submit',editProfile);


// Functions

function changeUserImage(){
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
    imageBase64(file);
}
function imageBase64(image){
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function (){
        this.value = reader.result;
        userImage.setAttribute('src',reader.result);
        localStorage.setItem('userImage',reader.result);
    }
    reader.onerror = function (){
        alert('error');
    }
}
function editProfile(e){
    e.preventDefault();
    localStorage.setItem('username',userNameEdit.value);
    localStorage.setItem('email',emailEdit.value);

    setTimeout( ()=> window.location = 'profile.html',500);
}