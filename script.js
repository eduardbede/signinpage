
const email = document.getElementById("email");
const password = document.getElementById("password");
const buttonCenter = document.getElementById("buttonCenter");
const inputValue = document.querySelectorAll(".inputValue");
const messageDiv = document.querySelectorAll(".messageDiv");


function verifyEmailAndPass(){
    const verify = JSON.parse(localStorage.getItem("userData"));
    if(verify === null){
        confirmMessage.textContent = "Email does not exist!";
        confirmMessage.style.color = "red";
    }
     inputValue.forEach(el =>{
           if(el.value === ''){
            el.style.borderColor ="red";
           }
        });

    if(email.value === ''){
        noEmail.textContent = "This field is empty!";
        noEmail.style.color = "red";
    }   else if (!email.value.includes("@gmail.com", "@yahoo.com", "hotmail.com", "aol.com")){
        noEmail.textContent = "Email format is not correct!";
        noEmail.style.color = "red";
    }  else if (verify.findIndex(el => el.email === email.value) !== -1){
        if(verify[verify.findIndex(el => el.email === email.value)].password === password.value){
            confirmMessage.textContent = "Log In Succeseful!";
            confirmMessage.style.color = "green";
        }else if(verify.findIndex(el => el.password === password.value) === -1){
            confirmMessage.textContent = "Password not match!";
            confirmMessage.style.color = "red"
        }
     }
        else if(verify.findIndex(el => el.email === email.value) === -1 ){
            confirmMessage.textContent = "Email does not exist!";
            confirmMessage.style.color = "red";
     } 

     if(password.value === ''){
        noPassword.textContent = "This field is empty!";
        noPassword.style.color = "red";
    }  else if(password.value < 5){
        noPassword.textContent = "Password too short!";
        noPassword.style.color = "red";
    }

}

    inputValue.forEach(el =>{
        el.addEventListener("click", ()=>{
            el.style.borderColor = "black";
            noEmail.textContent = "";
            noPassword.textContent = "";
            confirmMessage.textContent = ""
        });
    });


buttonCenter.addEventListener("click", ()=>{
    verifyEmailAndPass()
})


  
