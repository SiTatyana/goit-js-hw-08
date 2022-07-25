const throttle = require('lodash.throttle');const refs = {
    form: document.querySelector('[type="submit"]'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 1000));

const STORAGE_KEY = "feedback-form-state";

const formData = {};

processingTheForm();

function onFormSubmit(e) {
  e.preventDefault();
  formData.email = refs.email.value;
  formData.message = refs.message.value;
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};


function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function processingTheForm() {
    const formValues = localStorage.getItem(STORAGE_KEY);
    const objectValues = JSON.parse(formValues);
   
    if (objectValues) {
        const saveEmail = objectValues.email;
        refs.email.value = saveEmail;

        const saveMessage = objectValues.message;
        refs.message.value = saveMessage;
    };
}


