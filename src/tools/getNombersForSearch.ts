export const getNumbersForSearch = (min: number, max: number) => {
  let numMin = min - 1;
  let numMax = max - numMin;
  return { numMin, numMax };
};
