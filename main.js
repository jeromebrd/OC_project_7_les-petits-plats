import './assets/css/style.css';
import { displayCard } from './assets/scripts/templateRecipe';
import { getSearchRecipe } from './assets/scripts/algoSearch';
import { displayInput } from './assets/scripts/dropdowns';
import { changeOpacity } from './assets/scripts/animations';
import { fetchData } from './assets/scripts/fetchData';

document.addEventListener('DOMContentLoaded', () => {
  displayCard();
  displayInput();
  getSearchRecipe();
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
