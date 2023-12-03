'use strict';
const listOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', listOfCategories.length);
listOfCategories.forEach(function (number ,index) {
    console.log('Category:', listOfCategories[index].firstElementChild.textContent);
    console.log('Elements:', listOfCategories[index].lastElementChild.childElementCount)
});