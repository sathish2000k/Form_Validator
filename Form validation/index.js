let save_button = document.getElementById("save_button");
let fname = document.getElementById("name");
let password = document.getElementById("password");
let retype_password = document.getElementById("retype_password");
let mail = document.getElementById("mail");
let phone_number = document.getElementById("number");

save_button.addEventListener("click", () => {
    fname_validation();
    password_validation();
    retype_password_validation();
    mail_validation();
    phone_validation();
});

function fname_validation(){
    if(fname.value == null||fname.value == ""){
        document.getElementsByTagName("p")[0].innerHTML = "This field is required";
    }
    else if(!isNaN(fname.value)){
        document.getElementsByTagName("p")[0].innerHTML = "Name should not contain number";
    }
}

function password_validation(){
    if(password.value == null||password.value == ""){
        document.getElementsByTagName("p")[1].innerHTML = "This field is required";
    }
    else if(password.value.length<8){
        document.getElementsByTagName("p")[1].innerHTML = "Password must be atleast 8 characters long";
    }
}

function retype_password_validation(){
    if(retype_password.value == null||retype_password.value == ""){
        document.getElementsByTagName("p")[2].innerHTML = "This field is required";
    }
    else if(password.value != retype_password.value){
        document.getElementsByTagName("p")[2].innerHTML = "Password does not match";        
    }
}

function mail_validation(){
    let atPosition = mail.value.indexOf("@");
    let dotPosition = mail.value.indexOf(".");
    console.log(mail.value.length);
    console.log(dotPosition+3);
    if(mail.value == null||mail.value == ""){
        document.getElementsByTagName("p")[3].innerHTML = "This field is required";
    }
    else if(atPosition<1 || dotPosition<atPosition+2 || dotPosition+3 >= mail.value.length){
        document.getElementsByTagName("p")[3].innerHTML = "This field is invalid";
    }
}


function phone_validation(){
    if(phone_number.value == null||phone_number.value == ""){
        document.getElementsByTagName("p")[4].innerHTML = "This field is required";
    }
    else if(isNaN(phone_number.value)){
        document.getElementsByTagName("p")[4].innerHTML = "This field is invalid";
    }
}