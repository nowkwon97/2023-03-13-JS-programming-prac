const numberChecker = require("./number-checker.js");
// number-checker.js라는 자식을 받아온다.

// module.exports = {
//   add : function add(first, second) {
//     return first + second;
//   },
//   minus : function minus(first, second) {
//     return first - second;
//   }
// };
// function add(first, second) {
//   return first + second;
// };

// 밑 코드의 단점 -> 의존성이 생김
// 복잡도가 높아진다.
// 숫자가 아닌 문자열은 합쳐버림 (bug)
module.exports = function(first, second) {
  if(numberChecker(first) === true) {
    return first + second;
  };
};