'use strict';
const nameInputForm = document.querySelector('#name-input');
const nameOutputForm = document.querySelector('#name-output');
console.log(nameOutputForm.textContent);
nameInputForm.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event);
if (event.currentTarget.value.trim() !== "")
{ nameOutputForm.textContent = event.currentTarget.value.trim() }
else { nameOutputForm.textContent = 'Anonymous' }
};