import './assets/css/style.css';
import {
  displayCard,
  displayCardFind,
  updateRecipes,
} from './assets/scripts/templateRecipe';
import { displayInput } from './assets/scripts/dropdowns';
import { changeOpacity } from './assets/scripts/animations';
import { fetchData } from './assets/scripts/fetchData';

const btnCancelHero = document.querySelector('.btn-cancel-hero');
const inputSearchHero = document.querySelector('.search-hero');
const formElem = document.querySelector('form');

document.addEventListener('DOMContentLoaded', () => {
  displayCard();
  displayInput();
  getSearchRecipe();
});

btnCancelHero.addEventListener('click', () => {
  changeOpacity(btnCancelHero, 0);
  displayCard();
});

/* // open select menu
filtersGroupElem.forEach((filterElem) => {
  const angleDown = filterElem.querySelector('.angle-down');
  const angleUp = filterElem.querySelector('.angle-up');
  const dropdownMenu = filterElem.querySelector('.dropdown-menu');
  const titleMenu = filterElem.querySelector('.title-menu');
  const itemsSelected = filterElem.querySelectorAll('.item-selected');
  titleMenu.addEventListener('click', () => {
    // add activ class on click
    if (!filterElem.classList.contains('activ')) {
      filterElem.classList.add('activ');
      changesAngles(angleDown, angleUp);
      isVisible(dropdownMenu, true);
    } else {
      filterElem.classList.remove('activ');
      changesAngles(angleDown, angleUp);
      isVisible(dropdownMenu, false);
    }
  });
  diplayCrossIcon(itemsSelected);
}); */
