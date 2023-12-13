export const fetchData = async () => {
  let data;
  try {
    const response = await fetch('../../data/recipes.json');
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};
