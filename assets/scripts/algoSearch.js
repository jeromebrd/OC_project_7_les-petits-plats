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
export const findRecipes = (search, recipes, searchType = 'words') => {
  let userSearch;
  if (searchType === 'tag') {
    userSearch = search;
  } else {
    userSearch = search[0];
  }
  const recipeFind = [];

  // save recipe name, desc, and each ingredients to lower case
  recipes.forEach((recipe) => {
    const recipeNameLowercase = recipe.name.toLowerCase();
    const recipeDescLowercase = recipe.description.toLowerCase();
    const recipeIngredientLowercase = recipe.ingredients.map((ingredient) => {
      return ingredient.ingredient.toLowerCase();
    });
    const recipeUstensilsLowercase = recipe.ustensils.map((ustensil) => {
      return ustensil.toLowerCase();
    });
    const recipeApplianceLowercase = recipe.appliance.toLowerCase();
    if (searchType === 'tag') {
      // Check if any tag matches the user search
      if (
        search.every(
          (tag) =>
            recipeIngredientLowercase.includes(tag) ||
            recipeUstensilsLowercase.includes(tag) ||
            recipeApplianceLowercase.includes(tag)
        )
      ) {
        recipeFind.push(recipe);
      }
    } else {
      // Default to 'words' search type
      // conditions to find recipes with name, description, or ingredients
      if (
        recipeNameLowercase === userSearch ||
        recipeNameLowercase.includes(userSearch) ||
        recipeDescLowercase.includes(userSearch) ||
        recipeIngredientLowercase.includes(userSearch)
      ) {
        recipeFind.push(recipe);
      }
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
    updateRecipes(results.length);
    displayCardFind(results);
  });
};
