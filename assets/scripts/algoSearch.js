import { fetchData } from './fetchData';
import { displayCard, displayCardFind, updateRecipes } from './templateRecipe';
import { changeOpacity } from './animations';

const inputSearchHero = document.querySelector('.search-hero');
const formElem = document.querySelector('form');
const btnCancelHero = document.querySelector('.btn-cancel-hero');

btnCancelHero.addEventListener('click', () => {
  changeOpacity(btnCancelHero, 0);
  updateRecipes();
  displayCard();
});

// To find the recipes in the db with a functional algorithm
const findRecipes = (search, recipes) => {
  const userSearch = search[0];
  const recipeFind = [];
  const searchWords = userSearch.toLowerCase().split(' ');
  console.log(searchWords);

  recipes.forEach((recipe) => {
    const recipeNameLowercase = recipe.name.toLowerCase();
    const recipeDescLowercase = recipe.description.toLowerCase();
    const recipeIngredientLowercase = recipe.ingredients.map((ingredient) => {
      return ingredient.ingredient.toLowerCase();
    });

    // conditions to find recipes with name, description or ingredients
    if (recipeNameLowercase === userSearch) {
      recipeFind.push(recipe);
    } else if (
      recipeNameLowercase.includes(userSearch) ||
      recipeDescLowercase.includes(userSearch) ||
      recipeIngredientLowercase.includes(userSearch)
    ) {
      recipeFind.push(recipe);
    }
  });
  return recipeFind;
};

// get recipes with searching in search bar
export const getSearchRecipe = async () => {
  const datas = await fetchData();
  let searchValue = '';
  let dataSubmit = [];

  // change opacity of button cancel when user is typing
  inputSearchHero.addEventListener('input', (event) => {
    const value = event.target.value;
    searchValue = value;
    if (value.length > 0) {
      changeOpacity(btnCancelHero, 1);
    } else {
      changeOpacity(btnCancelHero, 0);
      displayCard();
    }
  });
  // when form is submitting if findRecipe found recipe, is updating cards to display
  formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    dataSubmit = [];
    dataSubmit.push(searchValue.toLowerCase());
    console.log(dataSubmit);

    const results = findRecipes(dataSubmit, datas);
    updateRecipes();
    displayCardFind(results);
  });
};
