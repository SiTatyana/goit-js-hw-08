import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
const STORAGE_KEY = "feedback-form-state";

processingTheForm();

const formData = {email:"", name:""};

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
};


// let STORAGE_KEY = 'feedback-form-state';
// processingTheForm();

// refs.form.addEventListener('submit', e  => {
//   e.preventDefault();
//   const formData = new FormData(refs.form);
//   formData.forEach((value, name) => console.log(value, name));
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// });

// refs.form.addEventListener('input', throttle(onFormInput, 500));
// function onFormInput(e) {
//   let formData = localStorage.getItem(STORAGE_KEY);
//   formData = formData ? JSON.parse(formData) : {};
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };

// function processingTheForm() {
//     const formValues = localStorage.getItem(STORAGE_KEY);
//     const objectValues = JSON.parse(formValues);
   
//     if (objectValues) {
//         const saveEmail = objectValues.email;
//         refs.email.value = saveEmail;

//         const saveMessage = objectValues.message;
//         refs.message.value = saveMessage;
//     };
// };