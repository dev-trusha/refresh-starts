const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const message = document.getElementById('message').value.trim();


form.addEventListener('submit',(e)=>{

if(!validateInputs()){
    e.preventDefault();
}
})

function validateInputs(){
const name = name.value.trim();
const email = email.value.trim();
const phone = phone.value.trim();
const message = message.value.trim();

let isValid = true
if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    document.getElementById('nameError').style.display = 'block';
    isValid = false;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === '' || !emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Valid email is required';
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
}
const phonePattern = /^[0-9]{10}$/;
if (phone === '' || !phonePattern.test(phone)) {
    document.getElementById('phoneError').textContent = 'Valid phone number is required';
    document.getElementById('phoneError').style.display = 'block';
    isValid = false;
}
if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    document.getElementById('messageError').style.display = 'block';
    isValid = false;
}
if (isValid) {
    alert('Form submitted successfully!')
}
return isValid;

}
function setError(element,message){
const inputGroup = element.parentElement;
const errorElement = inputGroup.querySelector('.error')

errorElement.innerText = message;
inputGroup.classList.add('error')
inputGroup.classList.remove('success')
}

function setSuccess(element){
const inputGroup = element.parentElement;
const errorElement = inputGroup.querySelector('.error')

errorElement.innerText = '';
inputGroup.classList.add('success')
inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};