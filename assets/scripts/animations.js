export const changeOpacity = (element, opacity) => {
  if (opacity === 1) {
    element.classList.add('opacity-100');
    element.classList.remove('opacity-0');
  } else if (opacity === 0) {
    element.classList.add('opacity-0');
    element.classList.remove('opacity-100');
  }
};
// =================================================
export const changesAngles = (angleDown, angleUp) => {
  if (!angleDown.classList.contains('hidden')) {
    isVisible(angleDown, false);
    isVisible(angleUp, true);
  } else {
    isVisible(angleDown, true);
    isVisible(angleUp, false);
  }
};
// ==================================================
export const isVisible = (element, boolean) => {
  if (boolean) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
};
// ==================================================
// display cross in list item inside dropdown
export const diplayCrossIcon = (items) => {
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
