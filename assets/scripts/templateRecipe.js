import { fetchData } from './fetchData';
import '../css/style.css';

export const getRecipes = () => {
  // create recipe article
  const getCard = () => {
    const card = document.createElement('article');

    card.setAttribute(
      'class',
      'shadow-card flex flex-col relative h-[730px] w-[380px]bg-white rounded-3xl'
    );
    return card;
  };
  // create recipe image
  const getImgRecipe = (image) => {
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    divImg.setAttribute('class', 'bgimg-recipe h-[300px] w-full');
    img.setAttribute(
      'class',
      'object-cover rounded-tr-3xl rounded-tl-3xl h-full w-full'
    );
    img.setAttribute('src', `./assets/images/recettes/${image}`);
    divImg.appendChild(img);
    return divImg;
  };
  // create time label to realise the recipe
  const getTimeLabel = (time) => {
    const span = document.createElement('span');
    span.setAttribute(
      'class',
      'px-4 py-2 bg-primary rounded-full absolute top-4 right-4'
    );
    span.setAttribute('alt', '');
    span.textContent = `${time}min`;
    return span;
  };
  // create text container + title recipe
  const getTextContainer = (name) => {
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    container.setAttribute('class', 'py-7 px-6 flex flex-col justify-center');
    h2.setAttribute('class', 'font-anton text-lg text-black pb-5');
    h2.textContent = name;
    container.appendChild(h2);
    return container;
  };
  // create the recipe description
  const getTextRecipe = (desc) => {
    const container = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    container.setAttribute('class', 'desc flex flex-col gap-4 pb-5');
    h3.setAttribute('class', 'uppercase text-darkgrey text-xs');
    p.setAttribute('class', 'text-dark text-sm');
    h3.textContent = 'recette';
    p.textContent = desc.length < 280 ? desc : desc.slice(0, 280) + '...';
    container.appendChild(h3);
    container.appendChild(p);
    return container;
  };
  // create the ingredients list
  const getTextIngredients = (ingredients) => {
    const container = document.createElement('div');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    container.setAttribute('class', 'flex flex-col gap-4');
    h3.setAttribute('class', 'uppercase text-darkgrey text-xs');
    ul.setAttribute(
      'class',
      'list-ingredients text-dark text-sm grid grid-cols-2 gap-5'
    );
    h3.textContent = 'Ingrédients';
    container.appendChild(h3);

    // create list item
    ingredients.forEach((i) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'font-medium flex flex-col');
      li.innerHTML = `${i.ingredient} <span class="text-darkgrey font-normal">
      ${i.quantity}${i.unit ? i.unit : ''}
    </span>`;
      ul.appendChild(li);
    });
    container.appendChild(ul);
    return container;
  };
  return {
    getCard,
    getImgRecipe,
    getTimeLabel,
    getTextContainer,
    getTextRecipe,
    getTextIngredients,
  };
};
