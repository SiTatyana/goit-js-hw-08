import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
  message: document.querySelector('textarea'),
    btn: document.querySelector('button')
};

refs.btn.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));



const STORAGE_KEY = "feedback-form-state";
let formData = {};

processingTheForm();


// const formData = {email:"", name:""};


function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  formData.email = refs.email.value;
  formData.message = refs.message.value;
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
    formData = objectValues;
    refs.email.value = objectValues.email || "";
    refs.message.value = objectValues.message || "";
  };
};

