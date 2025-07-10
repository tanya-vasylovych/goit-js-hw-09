const formData = { email: "", message: "" };
const form = document.querySelector('form');

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
if (savedData) {
  formData.email = savedData.email || "";
  formData.message = savedData.message || "";
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

const onFormInput = event => {
    if (event.target.name === 'email' || event.target.name === 'message') {
        formData[event.target.name] = event.target.value;
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }
};


const onFormSubmit = event => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }
  
    console.log(formData);
  
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();
};

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);