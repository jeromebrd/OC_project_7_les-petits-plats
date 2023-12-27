import { fetchData } from './fetchData';
import { displayCardResult } from './templateRecipe';
const inputSearchHero = document.querySelector('.search-hero');
const containerCards = document.querySelector('.container-cards');

// Knuth-Morris-Pratt's string search

function buildKMPTable(pattern) {
  const next = Array(pattern.length).fill(0);
  let k = 0;

  for (let q = 1; q < pattern.length; ++q) {
    while (k > 0 && pattern[q] !== pattern[k]) {
      k = next[k - 1];
    }
    if (pattern[q] === pattern[k]) {
      ++k;
    }
    next[q] = k;
  }

  return next;
}

function searchKMP(text, pattern) {
  const next = buildKMPTable(pattern);
  const matches = [];

  let k = 0;
  for (let i = 0; i < text.length; i++) {
    while (k > 0 && text[i] !== pattern[k]) {
      k = next[k - 1];
    }
    if (text[i] === pattern[k]) {
      ++k;
      if (k === pattern.length) {
        matches.push(i - k + 1);
        k = next[k - 1];
      }
    }
  }

  return matches;
}

export const search = async () => {
  const pattern = inputSearchHero.value.toLowerCase();
  const data = await fetchData();
  const results = [];

  data.forEach((recipe, index) => {
    // Search in "name"
    const nameResults = searchKMP(recipe.name.toLowerCase(), pattern);
    nameResults.forEach((position) => {
      results.push({ index, position, property: 'name' });
    });

    // Search in "description"
    const descResults = searchKMP(recipe.description.toLowerCase(), pattern);
    descResults.forEach((position) => {
      results.push({ index, position, property: 'description' });
    });

    // Search in "ustensils"
    recipe.ustensils.forEach((utensil, utensilIndex) => {
      const utensilResults = searchKMP(utensil.toLowerCase(), pattern);
      utensilResults.forEach((position) => {
        results.push({
          index,
          position,
          property: `ustensils[${utensilIndex}]`,
        });
      });
    });
  });
  // display cards
  console.log(results);
  displayResults(results);
};

const displayResults = (results) => {
  containerCards.innerHTML = '';

  // Check if there are any results to display
  if (results.length === 0) {
    containerCards.innerHTML = '<p>Aucun résultat trouvé</p>';
    return;
  }
  // List to store unique recipes
  const uniqueRecipes = [];

  // Loop through the results and display the card
  results.forEach((result) => {
    // Check if the recipe is already present in the list of unique recipes
    const isRecipeUnique = !uniqueRecipes.some(
      (recipe) => recipe.index === result.index
    );
    if (isRecipeUnique) {
      uniqueRecipes.push(result);
      displayCardResult(result);
    }
  });
};
