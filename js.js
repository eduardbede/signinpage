const button = document.querySelector("button");
const inputs = document.querySelectorAll(".inputValue");
const message = document.getElementById("confirmMessage");
const date = new Date();
let year = date.getFullYear();
const an = (document.getElementById("an").textContent = year + " @eduardbede ");

let users = JSON.parse(localStorage.getItem('userData'));

if(users === null){
  users = [];
}

const form = () => {
  let users1 = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    password: document.getElementById("password").value,
    repeatPassword: document.getElementById("repeatPassword").value,
  };

  if (users1.firstName === "") {
    noFirstName.textContent = "This field is empty!";
    noFirstName.style.color = "red";
  }
  if (users1.lastName === "") {
    noLastName.textContent = "This field is empty!";
    noLastName.style.color = "red";
  }
  if (users1.email === "") {
    noEmail.textContent = "This field is empty!";
    noEmail.style.color = "red";
  }
  if (users1.phoneNumber === "") {
    noPhoneNumber.textContent = "This field is empty!";
    noPhoneNumber.style.color = "red";
  }
  if (users1.password === "") {
    eroare.textContent = "This field is empty!";
    eroare.style.color = "red";
  }
  if (users1.repeatPassword === "") {
    noRepeatPassword.textContent = "This field is empty!";
    noRepeatPassword.style.color = "red";
  }

  /* 
        if(users1.firstName === '' || users1.lastName === '' || users1.email === '' || users1.phoneNumber === '' ||
        users1.password === '' || users1.repeatPassword === ''){
            inputs.forEach(e=>{
                if(e.value === ''){
                    e.style.borderColor = "red"
                }
            })
        }   */

  if (
    users1.firstName === "" ||
    users1.lastName === "" ||
    users1.email === "" ||
    users1.phoneNumber === "" ||
    users1.password === "" ||
    users1.repeatPassword === ""
  ) {
    inputs.forEach((e) => {
      if (e.value === "") {
        e.style.borderColor = "red";
      }
    });
  } else if (!users1.email.includes("@gmail.com", "@yahoo.com", "hotmail.com", "aol.com")) {
    noEmail.textContent = "Incorect format of email adress";
    noEmail.style.color = "red";
    email.style.borderColor = "red";
  } else if (
    users.findIndex((el) => el.email === document.getElementById("email").value) !== -1) {
    noEmail.textContent = "This email exist!";
    noEmail.style.color = "red";
    email.style.borderColor = "red";
  } else if (users1.password.length < 5) {
    eroare.textContent = "Minimum 5 characters required";
    eroare.style.color = "red";
    password.style.borderColor = "red";
  } else if (users1.password !== users1.repeatPassword) {
    eroare.textContent = "*Passwords do not match";
    eroare.style.color = "red";
    password.style.borderColor = "red";
    repeatPassword.style.borderColor = "red";
    password.value = "";
    repeatPassword.value = "";
  } else {
    users.push(users1);
    localStorage.setItem('userData', JSON.stringify(users));
    message.textContent = "Your Account Has Been Created!";
    message.style.color = "green";
    inputs.forEach((e) => (e.value = ""));
  }
};

function passWord() {
  password.addEventListener("click", () => {
    password.style.borderColor = "black";
    repeatPassword.style.borderColor = "black";
    eroare.textContent = "";
  });
}
passWord();

inputs.forEach((e) => {
  e.addEventListener("click", () => {
    message.textContent = "";
    noFirstName.textContent = "";
    firstName.style.borderColor = "black";
    noLastName.textContent = "";
    noLastName.style.color = "black";
    lastName.style.borderColor = "black";
    noEmail.textContent = "";
    noEmail.style.color = "black";
    email.style.borderColor = "black";
    noPhoneNumber.textContent = "";
    noPhoneNumber.style.color = "black";
    phoneNumber.style.borderColor = "black";
    eroare.textContent = "";
    eroare.style.color = "black";
    password.style.borderColor = "black";
    noRepeatPassword.textContent = "";
    noRepeatPassword.style.color = "black";
    repeatPassword.style.borderColor = "black";
  });
});

button.addEventListener("click", () => {
  form();
  window.scrollTo({ top: 2000, behavior: "smooth" });
  console.log(users);
});

