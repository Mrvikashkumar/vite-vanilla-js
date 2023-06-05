// import classes from '../css/style.module.css'

// document.querySelector('.h1').className = classes.title;

// main.js
const textForm = document.getElementById('text-form');
const textTitleInput = document.getElementById('text-title');
const textDescriptionInput = document.getElementById('text-description');
const textList = document.getElementById('text-list');
let count = 0;
textForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const textTitle = textTitleInput.value.trim();
  const textDescription = textDescriptionInput.value.trim();
  textList.innerHTML = ''
  if (textTitle !== '' && textDescription !== '') {
    count = count + 1;
    const textItem = document.createElement('li');
    textItem.innerHTML = `
      <h3 class="text-2xl">${count}. ${textTitle}</h3>
      <p class="text-md text-zinc-400">${textDescription}</p>
    `;
    textList.appendChild(textItem);
    textTitleInput.value = '';
    textDescriptionInput.value = '';
  }
});
