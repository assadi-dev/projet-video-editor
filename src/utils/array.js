/**
 *
 * @param {Array} array tableau d'origine
 * @param {Any} value valeur
 * @param {Number} index  l'index
 * @returns
 * Ajouter une valeur a un position specifique
 */
export const addToArrayPosition = function (array, value, index) {
  let arrayLeftPos = array.split.slice(0, index + 1);
  let arrayRightPos = array.split.slice(index + 1);
  arrayLeftPos.push(value);
  let finalArray = arrayLeftPos.concat(arrayRightPos);
  return finalArray;
};
