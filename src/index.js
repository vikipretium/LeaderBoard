import './style.css';
import { getData } from './assets/modules/api.js';
import addPoints from './assets/modules/add.js';

const formInput = document.querySelector('.form');

formInput.addEventListener('submit', (event) => {
  event.preventDefault();
  addPoints();
});
const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
});

window.onload = () => {
  getData();
};
