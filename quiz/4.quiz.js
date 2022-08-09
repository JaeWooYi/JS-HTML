var product = [
  {
    name: "basketball",
    display: "🏀",
    price: "50$",
    seller: "KKK",
  },
  {
    name: "soccerball",
    display: "⚽️",
    price: "40$",
    seller: "ZZZ",
  },
];

/**
 * 1. 인자로 배열을 받을 때 길이를 return하는 함수를 만들기 -> product넣어서 실행 해보기
 * 2. product 객체를 넣었을 때, pruduct의 seller를 반환하는 함수 만들어보기 -> product의 1번째 값 넣어서 실행해보기
 */
console.log("1번답");
function lengthOfArray(arr) {
  var length = arr.length;
  console.log(length);
}
lengthOfArray(product);

console.log();
console.log("-----------------------");
console.log();

console.log("2번답");
function spitSeller(arr) {
  return arr.seller;
}
var test = spitSeller(product[0]);
console.log(test);
