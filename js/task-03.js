'use strict';
const nameInputForm = document.querySelector('#name-input');
const nameOutputForm = document.querySelector('#name-output');
nameInputForm.addEventListener('input', onInputChange);
function onInputChange(event) {
    const nameString = event.currentTarget.value.trim();
if (nameString !== "")
{ nameOutputForm.textContent = nameString }
else { nameOutputForm.textContent = 'Anonymous' }
};