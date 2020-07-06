//Blur Events
document.querySelector('#name').addEventListener('blur', validateName)
document.querySelector('#zipcode').addEventListener('blur', validateZipcode)
document.querySelector('#email').addEventListener('blur', validateEmail)
document.querySelector('#phone').addEventListener('blur', validatePhone)

function validateName() {
    const name = document.querySelector('#name') ;
    const re = /^[a-zA-Z]{3,15}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }
   else{
    name.classList.remove('is-invalid');
   }
}
function validateZipcode() {

    const name = document.querySelector('#zipcode');
    const re = /^\d{6}$/;
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }
   else{
    name.classList.remove('is-invalid');
   }
}
function validateEmail() {

    const name = document.querySelector('#email') ;

    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }
   else{
    name.classList.remove('is-invalid');
   }
}
function validatePhone() {

    const name = document.querySelector('#phone');

    const re = /^\d{10}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }
   else{
    name.classList.remove('is-invalid');
   }
}