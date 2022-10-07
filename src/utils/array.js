/**
 *
 * @param {Object} obj Le tableau d'origine
 * @param {String} key clé
 * @param {Any} value valeur
 * @param {Number} index  l'index
 * @returns
 * Ajouter une valeur au position specifique
 */
export const addToObject = function (obj, key, value, index) {
  var temp = {};
  var i = 0;

  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (i === index && key && value) {
        temp[key] = value;
      }

      temp[prop] = obj[prop];
      i++;
    }
  }
  if (!index && key) {
    temp[key] = value;
  }

  return temp;
};
