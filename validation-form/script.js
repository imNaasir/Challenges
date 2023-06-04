const nameError = document.querySelector("#nameError");
const telError = document.querySelector("#telError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const submitError = document.querySelector("#submitError");
function checkName(){
    let fulNames = document.getElementById("fullName").value;
    
    if (fulNames.length == 0){
        nameError.innerHTML = "Name is required";
    }else if (!fulNames.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
    }else{
        nameError.innerHTML = '<i class="fa fa-check text-green-900"></i>';
    } 
}
let checkNO = () => {
    let phone = document.getElementById("telephone").value;
    
    if (phone.length == 0){
        telError.innerHTML = "phone number is required";
    }else if (phone.length !== 10){
        telError.innerHTML = "Phone number should be 10 digits";
    }else if (!phone.match(/^[0-9]{10}$/)){
        telError.innerHTML = "Only digits please";
    }else{
        telError.innerHTML = '<i class="fa fa-check text-green-900"></i>';
    } 
}
let checkEmail = () => {
    let Email = document.getElementById("email").value;
    // const email = 
    if (Email.length == 0){
        emailError.innerHTML = "Email is required"
    }
    else if(!Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){                                                            
        emailError.innerHTML = "Invalid Email";
    }else{
        emailError.innerHTML = '<i class="fa fa-check text-green-900"></i>';
    }
}

let checkMessage = () => {
    let massage = document.getElementById("boxMessage").value;
    const required = 20;
    let count = required - massage.length;
    
    if (count > 0){
        messageError.innerHTML = count + " " + "more characters required"
    }else{
        messageError.innerHTML = '<i class="fa fa-check text-green-900"></i>';
    }
}


// function checkForm() {
//     if (!checkName() || !checkNO() || !checkEmail() || !checkMessage()) {
//         submitError.style.display = 'block';
//         submitError.innerHTML = "Please fix Error to submit";
//         setTimeout(function(){
//             submitError.style.display = 'none';
//         },3000); 
//     }else{
//         submitError.style.display = 'none';
//     }
// }

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkName();
    checkNO();
    checkEmail();
    checkMessage();
})
