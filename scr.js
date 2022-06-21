const firstInput=document.querySelector('#fname');
const lastInput=document.querySelector('#lname');
const emailInput=document.querySelector('#email');
const passInput=document.querySelector('#pass');
const form=document.querySelector('#run');
var fnameError=document.getElementById('fname-error');
var lnameError=document.getElementById('lname-error');
var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');
var svf=document.getElementById('svf');
var svl=document.getElementById('svl');
var sve=document.getElementById('sve');
var svp=document.getElementById('svp');

form.addEventListener('submit', (event)=>{
    validateForm();
    
    if (isFormValid()==true){
        form.submit();
    }
    else{
        event.preventDefault();
    }

});
function   isFormValid(){
    const inputContainers=form.querySelectorAll('input-group');
    let result=true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result=false;
        }
    })
}
function validateForm(){
    //fname
    if (firstInput.value.trim()==""){
        setError(firstInput);
        setEmpty(firstInput);
        fnameError.innerHTML="First Name cannot be empty";
        svf.style.visibility='visible';
    }
    else{
        setSucess(firstInput);
        fnameError.innerHTML="";
        svf.style.visibility='hidden';

    }
    //EMAIL
    if (emailInput.value.trim()==""){
        setError(emailInput);
        setEmpty(emailInput);
        emailError.innerHTML="Email cannot be empty";
        sve.style.visibility='visible';
    }else if(isEmailValid(emailInput.value)){
        setSucess(emailInput);
        emailError.innerHTML="";
        sve.style.visibility='hidden';
    }
    else{
        setError(emailInput);
        emailError.innerHTML="Looks like this is not an email";
        sve.style.visibility='visible';
    }
    //LNAME
    if (lastInput.value.trim()==""){
        setError(lastInput);
        setEmpty(lastInput);
        lnameError.innerHTML="Last Name cannot be empty";
        svl.style.visibility='visible';
    }
    else{
        setSucess(lastInput);
        lnameError.innerHTML="";
        svl.style.visibility='hidden';
    }
    //PASSWORD
        if (passInput.value.trim()==""){
        setError(passInput);
        setEmpty(passInput);
        passwordError.innerHTML="Password cannot be empty";
        svp.style.visibility='visible';
    }
    else{
        setSucess(passInput);
        passwordError.innerHTML="";
        svp.style.visibility='hidden';

    }
}

function setError(Element){
    const parent=Element.parentElement;
    if (parent.classList.contains('sucess')){
        parent.classList.remove('sucess');
    }
    
    parent.classList.add('error');
}
function setEmpty(Element){
    const parent=Element.parentElement;
    if (parent.classList.contains('sucess')){
        parent.classList.remove('sucess');
    }
    parent.classList.add('empty');
    
}
function setSucess(Element) {
    const parent=Element.parentElement;
    if (parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('sucess');

}
function isEmailValid(email){
    const reg=/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    return reg.test(email);
}