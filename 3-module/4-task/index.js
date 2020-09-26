/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let ListOfWorkers = users.filter(function(userObj) {
    if (userObj.age <= age) {
      return true;
    } else {
      return false;
    }
  })
  .map(function(userObj) {
    return `${userObj.name}, ${userObj.balance}`;
  }) ;
  return ListOfWorkers.join(`\n`);

}
