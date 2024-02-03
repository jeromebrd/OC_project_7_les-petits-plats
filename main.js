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
