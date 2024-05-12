const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('.message');

form.addEventListener('input', handleInput);

function handleInput(event) {
//   event.preventDefault();
  const element = event.target.name;
    formData[element] = event.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}


function populateInfo (){
const info = JSON.parse(localStorage.getItem("feedback-form-state"))
console.log(info)
}

