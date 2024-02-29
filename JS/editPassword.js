//  variables
let password = document.getElementById('password');
let newPassword = document.getElementById('new_password');
let newPasswordConfirm = document.getElementById('new_password_confirm');
let editPass = document.getElementById('edit_pass');
let passwordChange = document.getElementById('password_change');

let get_password = localStorage.getItem('password');

// events :

editPass.addEventListener('submit',updatePassword);

// functions : 

function updatePassword(e){
    e.preventDefault()
    if(password.value && newPassword.value && newPasswordConfirm.value){
        if(password.value === localStorage.getItem('password')){
            if(newPassword.value === newPasswordConfirm.value){
                localStorage.setItem('password',newPassword.value);
                passwordChange.style.transform = 'translate(-50%,-50%)scale(1)';
                setTimeout(function(){
                    window.location = 'profile.html';
                },2000);
            }
            else{
                alert('please right the same password in the new and the confirm password!!!');
                
            }
        }
        else{
            alert('your last password in wrong !!!');
                password.value='';
                newPassword.value='';
                newPasswordConfirm.value='';
        }
    }
}

