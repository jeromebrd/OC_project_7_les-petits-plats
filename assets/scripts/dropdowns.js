import {
  displayCrossIcon,
  isVisible,
  changesAngles,
  changeOpacity,
} from './animations';
import { fetchData } from './fetchData';
fetchData;
export const dropdownMenu = () => {
  const listGroup = document.querySelectorAll('.list-group');
  const getContainerInput = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'flex flex-col w-full');
    return div;
  };
  const getContainerTitleAndAngles = () => {
    const div = document.createElement('div');
    div.setAttribute(
      'class',
      'title-menu flex justify-between items-center px-5'
    );
    return div;
  };
  const getTitle = (title) => {
    let titleTranslate;
    if (title === 'ingredients') {
      titleTranslate = 'Ingrédients';
    } else if (title === 'ustensils') {
      titleTranslate = 'Ustensiles';
    } else {
      titleTranslate = 'Appareils';
    }
    const titleText = document.createElement('p');
    titleText.setAttribute('class', 'font-medium cursor-pointer capitalize');
    titleText.textContent = titleTranslate;
    return titleText;
  };
  const getAngles = () => {
    const angles = document.createElement('div');
    const angleDown = document.createElement('img');
    const angleUp = document.createElement('img');
    angles.setAttribute('class', 'angles');
    angleDown.setAttribute('class', 'angle-down');
    angleDown.setAttribute('src', './assets/images/icons/angle-down.svg');
    angleUp.setAttribute('class', 'angle-up hidden');
    angleUp.setAttribute('src', './assets/images/icons/angle-up.svg');
    angles.appendChild(angleDown);
    angles.appendChild(angleUp);
    return angles;
  };
  const getDropdown = () => {
    const div = document.createElement('div');
    div.setAttribute(
      'class',
      'dropdown-menu hidden transition-all duration-400 h-[315px] overflow-y-hidden hover:overflow-y-scroll scroll-smooth'
    );
    return div;
  };
  const getSearchBar = (value) => {
    const container = document.createElement('div');
    const containerSearchBar = document.createElement('div');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const loop = document.createElement('div');

    container.setAttribute('class', 'px-5 pt-2');
    containerSearchBar.setAttribute(
      'class',
      'w-full text-lightgrey flex justify-between items-center border py-1 px-2 border-lightgrey mb-2 rounded-sm'
    );
    div.setAttribute('class', 'flex justify-between items-center pr-2');
    input.setAttribute('class', 'w-full flex-1 outline-none');
    input.setAttribute('type', 'text');
    input.setAttribute('name', value);
    input.setAttribute('id', value);

    button.setAttribute(
      'class',
      'opacity-0 transition-opacity duration-200 ease-out '
    );
    button.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
  >
    <path
      d="M7 7L4 4M4 4L1 1M4 4L7 1M4 4L1 7"
      stroke="#7A7A7A"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;

    loop.setAttribute('class', 'h-full');
    loop.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 28 29"
    fill="none"
  >
    <circle
      cx="10"
      cy="10.4219"
      r="9.5"
      stroke="#7a7a7a"
    />
    <line
      x1="18.3536"
      y1="19.0683"
      x2="27.3536"
      y2="28.0683"
      stroke="#7a7a7a"
    />
  </svg>`;

    container.appendChild(containerSearchBar);
    containerSearchBar.appendChild(div);
    div.appendChild(input);
    div.appendChild(button);
    containerSearchBar.appendChild(loop);

    input.addEventListener('input', (e) => {
      let value = e.target.value;
      button.addEventListener('click', () => (value = ' '));
      if (value.length > 0) {
        changeOpacity(button, 1);
      } else {
        changeOpacity(button, 0);
      }
      console.log(value);
    });
    return container;
  };
  // ==================   items Selected ======================
  const getListItemsSelected = () => {
    const ul = document.createElement('ul');
    ul.setAttribute(
      'class',
      'items-selected w-full pt-3 pb-5 flex flex-col gap-1 text-sm'
    );
    return ul;
  };
  const getItemSelected = (item) => {
    const li = document.createElement(li);
    li.innerHTML = `<li
    class="item-selected w-full bg-primary py-2 px-5 hover:font-bold transition-all duration-100 ease-out flex justify-between items-center"
  >
    ${item} <span class="opacity-0 transition-opacity duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
      <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></span>
  </li>`;
    return li;
  };
  // ====================================================
  const getAllItems = () => {
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'list-group px-5 text-sm');
    return ul;
  };

  const getEachItem = () => {
    const li = document.createElement('li');
    li.setAttribute('class', 'pb-1');
    return li;
  };
  return {
    getContainerInput,
    getTitle,
    getAngles,
    getContainerTitleAndAngles,
    getDropdown,
    getSearchBar,
    getListItemsSelected,
    getItemSelected,
    getAllItems,
    getEachItem,
  };
};

export const displayInput = () => {
  const filterGroupElems = document.querySelectorAll('.filter-group');
  const template = dropdownMenu();
  for (let index = 0; index < filterGroupElems.length; index++) {
    const element = filterGroupElems[index];
    const title = filterGroupElems[index].id;
    const titleText = template.getTitle(title);
    const container = template.getContainerInput();
    const containerTitleAndAngles = template.getContainerTitleAndAngles();
    const angles = template.getAngles();
    const angleDown = angles.firstChild;
    const angleUp = angles.lastChild;
    const dropdown = template.getDropdown();
    const searchBar = template.getSearchBar(title);
    const listSelected = template.getListItemsSelected();
    const allItems = template.getAllItems();
    const eachItem = template.getEachItem();
    element.appendChild(container);
    container.appendChild(containerTitleAndAngles);
    containerTitleAndAngles.appendChild(titleText);
    containerTitleAndAngles.appendChild(angles);
    container.appendChild(dropdown);
    dropdown.appendChild(searchBar);
    dropdown.appendChild(listSelected);
    dropdown.appendChild(allItems);
    if (title === 'ingredients') {
      createItem('ingredients', allItems, eachItem);
    }
    if (title === 'ustensils') {
      createItem('ustensils', allItems, eachItem);
    }
    if (title === 'appliance') {
      createItem('appliance', allItems, eachItem);
    }
    // open select menu
    clickToOpenDropdown(
      containerTitleAndAngles,
      element,
      angleDown,
      angleUp,
      dropdown
    );
  }
};
const clickToOpenDropdown = (input, element, angleDown, angleUp, dropdown) => {
  input.addEventListener('click', () => {
    // add activ class on click
    if (!element.classList.contains('activ')) {
      element.classList.add('activ');
      changesAngles(angleDown, angleUp);
      isVisible(dropdown, true);
    } else {
      element.classList.remove('activ');
      changesAngles(angleDown, angleUp);
      isVisible(dropdown, false);
    }
  });
};

const createItem = async (elements, ul, item) => {
  const data = await fetchData();
  const uniqueItems = new Set(); // Utiliser un ensemble pour stocker les éléments uniques

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (elements === 'ingredients') {
    data.forEach((d) =>
      d.ingredients.forEach((ing) => {
        const newItem = item.cloneNode(true);
        newItem.textContent = capitalizeFirstLetter(
          ing.ingredient.toLowerCase()
        );
        uniqueItems.add(newItem.textContent);
      })
    );
  }

  if (elements === 'ustensils') {
    data.forEach((d) =>
      d.ustensils.forEach((ust) => {
        const newItem = item.cloneNode(true);
        newItem.textContent = capitalizeFirstLetter(ust.toLowerCase());
        uniqueItems.add(newItem.textContent);
      })
    );
  }

  if (elements === 'appliance') {
    data.forEach((d) => {
      const newItem = item.cloneNode(true);
      newItem.textContent = capitalizeFirstLetter(d.appliance.toLowerCase());
      uniqueItems.add(newItem.textContent);
    });
  }

  // Ajouter les éléments uniques à la liste
  uniqueItems.forEach((uniqueItem) => {
    const newItem = item.cloneNode(true);
    newItem.textContent = uniqueItem;
    ul.appendChild(newItem);
    // select recipe with filter when click on
    newItem.addEventListener('click', (event) => {
      const value = event.target.innerHTML;
      const filter = value.toLowerCase();
      addTag(value);
    });
  });
};

const addTag = (value) => {
  const containerChoices = document.querySelector('.filter-choices');
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.textContent = value;
  containerChoices.appendChild(li);
  li.setAttribute(
    'class',
    'px-5 py-4 bg-primary rounded-lg flex items-center justify-between gap-12'
  );
  li.appendChild(span);
  span.setAttribute('class', 'cursor-pointer h-full');
  span.innerHTML = `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5" stroke="#1B1B1B" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
  span.addEventListener('click', removeTag);
};

const removeTag = (event) => {
  const li = event.currentTarget.parentElement;
  li.remove();
};
