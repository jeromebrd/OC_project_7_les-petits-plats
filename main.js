// import './style.css';
const filtersGroupElem = document.querySelectorAll('.filter-group');
const btnCancelHero = document.querySelector('.btn-cancel-hero');
const inputSearchHero = document.querySelector('.search-hero');

const changeOpacity = (element, opacity) => {
  if (opacity === 1) {
    element.classList.add('opacity-100');
    element.classList.remove('opacity-0');
  } else if (opacity === 0) {
    element.classList.add('opacity-0');
    element.classList.remove('opacity-100');
  }
};
inputSearchHero.addEventListener('input', (event) => {
  const value = event.target.value;
  if (value.length > 0) {
    changeOpacity(btnCancelHero, 1);
  } else {
    changeOpacity(btnCancelHero, 0);
  }
});
// display cross in list item inside dropdown
const diplayCrossIcon = (items) => {
  items.forEach((item) => {
    const removeIcon = item.querySelector('span');
    item.addEventListener('mouseover', () => {
      changeOpacity(removeIcon, 1);
    });
    item.addEventListener('mouseout', () => {
      changeOpacity(removeIcon, 0);
    });
  });
};
// =================================================
const changesAngles = (angleDown, angleUp) => {
  if (!angleDown.classList.contains('hidden')) {
    isVisible(angleDown, false);
    isVisible(angleUp, true);
    // angleDown.classList.add('hidden');
    // angleUp.classList.remove('hidden');
  } else {
    isVisible(angleDown, true);
    isVisible(angleUp, false);
  }
};
// ==================================================
const isVisible = (element, boolean) => {
  if (boolean) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
};

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
