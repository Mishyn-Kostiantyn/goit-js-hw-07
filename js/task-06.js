function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlEl = document.querySelector('#controls');
const createButton = document.querySelector('[data-create]');
const destroyButton= document.querySelector('[data-destroy]');
const boxForDivs = document.querySelector('#boxes');


// Функція "Destroy Boxes"
function destroyBoxes() { boxForDivs.innerHTML = ''; }


// Функція "Create Boxes"
function createBoxes(amount)
{
  destroyBoxes();
  
  let startW = 30;
  let startH = 30;
  let step = 10;
  for (let i = 0; i <= (amount - 1); i += 1)
  {
    const newDiv= document.createElement('div');
    newDiv.style.width =`${(startW + (i * step))}px`;
    newDiv.style.height =`${(startH + (i * step))}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxForDivs.append(newDiv);
  }
  }

// Слухаємо кнопку "Create"
createButton.addEventListener('click', onCreateButtonclick);
 
function onCreateButtonclick(event)
{
    let amount =Number(event.currentTarget.previousElementSibling.value);
    if (amount>=1 && amount <= 100)
    {
      createBoxes(amount);
      event.currentTarget.previousElementSibling.value='';
    };
   }
  // Слухаємо кнопку "Destroy"
destroyButton.addEventListener('click', destroyBoxes);


