export const getIdsForApi = (min: number, max: number) => {
  let numbers = '';
  for (let i = min; i < max + 1; i++) {
    if (i === max) {
      numbers += i;
    } else {
      numbers += i + ',';
    }
  }
  return numbers;
};
