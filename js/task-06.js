function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlEl = document.querySelector('#controls');
const boxForDivs = document.querySelector('#boxes');
let divsArray = [];

// Функція "Destroy Boxes"
function destroyBoxes() { boxForDivs.innerHTML = ''; }


// Функція "Create Boxes"
function createBoxes(amount)
{
  destroyBoxes();
  divsArray = [];
  for (let i = 0; i <= (amount - 1); i += 1)
  {
    divsArray[i] = document.createElement('div');
    divsArray[i].style.width =`${(30 + (i * 10))}px`;
    divsArray[i].style.height =`${(30 + (i * 10))}px`;
    divsArray[i].style.backgroundColor = getRandomHexColor();
  }
  boxForDivs.append(...divsArray);
 }

// Слухаємо кнопку "Create"
controlEl.children[1].addEventListener('click', onCreateButtonclick);
 
function onCreateButtonclick(event)
{
    let amount =event.currentTarget.previousElementSibling.value;
    if (amount>=1 && amount <= 100)
    {
      createBoxes(amount);
      event.currentTarget.previousElementSibling.value='';
    };
   }
  // Слухаємо кнопку "Destroy"
controlEl.children[2].addEventListener('click', destroyBoxes);


