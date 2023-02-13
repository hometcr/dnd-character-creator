export const getModifier = (score: number) => {
  let modifier = 0;
  if (score > 10) {
    modifier = Math.floor((score - 10) / 2);
  } else {
    modifier = Math.floor((score - 9) / 2);
  }
  return modifier;
};
