import './style.css';
import addPoints from './assets/modules/add.js';

// array for local storage

const addButton = document.querySelector('.bt-submit');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  addPoints();
});
