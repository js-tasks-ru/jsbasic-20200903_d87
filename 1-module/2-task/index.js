/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(userName) {
  if ((userName.includes(' ')) || (userName.length < 4) || (userName.trim() === '')) {
    return false;
  }

  return true;
}

// вариант развёрнутый с else if.  КАКОЙ ЛУЧШЕ?????
// function isValid(userName) {
//   if (userName.includes(' ')) {
//     return false;
//   }
//   else if (userName.length < 4) {
//     return false;
//   }
//   else if (userName.trim() === '') {
//     return false;
//   }
//   return true;
// }





function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
