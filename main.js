import './assets/css/style.css';
import { displayCard } from './assets/scripts/templateRecipe';
import { displayInput } from './assets/scripts/dropdowns';
import {
  changeOpacity,
  changesAngles,
  isVisible,
  displayCrossIcon,
} from './assets/scripts/animations';
import { fetchData } from './assets/scripts/fetchData';

const filtersGroupElem = document.querySelectorAll('.filter-group');
const btnCancelHero = document.querySelector('.btn-cancel-hero');
const inputSearchHero = document.querySelector('.search-hero');

document.addEventListener('DOMContentLoaded', () => {
  displayCard();
  displayInput();
});

inputSearchHero.addEventListener('input', (event) => {
  const value = event.target.value;
  if (value.length > 0) {
    changeOpacity(btnCancelHero, 1);
  } else {
    changeOpacity(btnCancelHero, 0);
  }
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
