export const changeItemId = (
  itemId: string,
  oldProp: string,
  newProp: string,
) => {
  const result = itemId.split('-');
  const index = result.indexOf(oldProp.toLowerCase());

  result[index] = newProp.toLowerCase();

  return result.join('-');
};
