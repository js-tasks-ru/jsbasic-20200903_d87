/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let minMax = {
    min: 0,
    max: 0,
  };

  str = str.replace(/\,/g, ` `);   ////нашла вот такой вариант с "/\,/g" но сама не очень поняла что это значит

  strSplit = str.split(' ');

  for (let item of strSplit) {
    item = parseFloat(item);
    if (!(item !== item)) { ///проверка на NAN
      minMax.max = Math.max(minMax.max, item);
      minMax.min = Math.min(minMax.min, item);
    }
  }
  return minMax;
}
