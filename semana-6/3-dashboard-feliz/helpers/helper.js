export const getColorsData = (transparency) => {
  const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff'];
  return colors.map(element => transparency ? element + transparency : element);
};