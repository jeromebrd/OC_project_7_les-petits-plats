import './assets/css/style.css';
import { displayCard } from './assets/scripts/templateRecipe';
import { displayInput } from './assets/scripts/dropdowns';
import { changeOpacity } from './assets/scripts/animations';
import { search } from './assets/scripts/searchRecipe';

const formElem = document.querySelector('form');
const filtersGroupElem = document.querySelectorAll('.filter-group');
const btnCancelHero = document.querySelector('.btn-cancel-hero');
const inputSearchHero = document.querySelector('.search-hero');

document.addEventListener('DOMContentLoaded', () => {
  displayCard();
  displayInput();
  formElem.addEventListener('submit', async (event) => {
    event.preventDefault();
    await search();
  });
});

inputSearchHero.addEventListener('input', (event) => {
  const value = event.target.value;
  if (value.length > 0) {
    changeOpacity(btnCancelHero, 1);
  } else {
    changeOpacity(btnCancelHero, 0);
  }
});
