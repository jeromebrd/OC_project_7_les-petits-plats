import './assets/css/style.css';
import { getRecipes } from './assets/scripts/templateRecipe';
import {
  changeOpacity,
  changesAngles,
  isVisible,
  diplayCrossIcon,
} from './assets/scripts/animations';
import { fetchData } from './assets/scripts/fetchData';

const filtersGroupElem = document.querySelectorAll('.filter-group');
const btnCancelHero = document.querySelector('.btn-cancel-hero');
const inputSearchHero = document.querySelector('.search-hero');
const containerCards = document.querySelector('.container-cards');

const displayCard = async () => {
  const data = await fetchData();
  const template = await getRecipes();
  console.log(data);
  data.forEach((d) => {
    const card = template.getCard();
    const imgRecipe = template.getImgRecipe(d.image);
    const timeLabel = template.getTimeLabel(d.time);
    const textContainer = template.getTextContainer(d.name);
    const textRecipe = template.getTextRecipe(d.description);
    const textIngredients = template.getTextIngredients(d.ingredients);
    containerCards.append(card);
    card.append(imgRecipe);
    card.append(timeLabel);
    card.append(textContainer);
    textContainer.append(textRecipe);
    textContainer.append(textIngredients);
  });
};
document.addEventListener('DOMContentLoaded', () => {
  displayCard();
});

inputSearchHero.addEventListener('input', (event) => {
  const value = event.target.value;
  if (value.length > 0) {
    changeOpacity(btnCancelHero, 1);
  } else {
    changeOpacity(btnCancelHero, 0);
  }
});

// open select menu
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
});
