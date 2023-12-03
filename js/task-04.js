'use strict';
const form = document.querySelector('.login-form');
const inputElements = Array.from(form.elements).filter(element => element.tagName === 'INPUT');
const inputsNames = [];
const getInputsNames = (elements) => { elements.forEach((elem) => { inputsNames.push(elem.name); })}
getInputsNames(inputElements);
const formSubmitData = {};
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const userData = event.currentTarget.elements;
    for (const inputName of inputsNames) {
        if (userData[inputName].value.trim() !== '')
    { formSubmitData[userData[inputName].name] = userData[inputName].value.trim();} 
        else { return alert('All form fields must be filled in') }
    } 
    console.log(formSubmitData);
    form.reset();
}
