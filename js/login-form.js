const form = document.getElementById("studentForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const studentID = document.getElementById("studentID");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const studentIDError = document.getElementById("studentIDError");

// FIRST NAME
if(firstName.value.trim() === ""){
firstNameError.style.display="block";
valid=false;
}else{
firstNameError.style.display="none";
}

// LAST NAME
if(lastName.value.trim() === ""){
lastNameError.style.display="block";
valid=false;
}else{
lastNameError.style.display="none";
}

// EMAIL
const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.value.match(emailPattern)){
emailError.style.display="block";
valid=false;
}else{
emailError.style.display="none";
}

// PASSWORD
if(password.value.length < 6){
passwordError.style.display="block";
valid=false;
}else{
passwordError.style.display="none";
}

// STUDENT ID
if(studentID.value.trim() === ""){
studentIDError.style.display="block";
valid=false;
}else{
studentIDError.style.display="none";
}

// SUCCESS
if(valid){

form.reset();

document.querySelectorAll(".error").forEach(error=>{
error.style.display="none";
});

form.style.display="none";
document.getElementById("successMessage").style.display="block";

}

});