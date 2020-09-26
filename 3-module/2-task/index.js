/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // return arr.filter(item => item >= a && item <= b); Костя, а где здесь ошибка подскажи???????
  return arr.filter(function(item) {
  if (item >= a && item <= b ) return item;
});
}

