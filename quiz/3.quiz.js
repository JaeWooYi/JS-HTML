var product = [
  { name: "a", display: "⚡︎", num: 10 },
  { name: "b", display: "★", num: 20 },
];

/**
 * 1. product의 갯수가 1개 이상일 때와 아닐때 나누는 조건문
 * 2. product의 갯수가 5개 이상일 때, 1~4개 사이일때, 0개일때의 조건문
 */

var len = product.length;
console.log(len);

console.log();

console.log("1. ");
if (len > 1) {
  console.log("1이상");
} else {
  console.log("1미만");
}

console.log();

console.log("2. ");
if (len >= 5) {
  console.log("5 이상");
} else if (len > 0 && len < 5) {
  console.log("0과 4사이일때");
} else if (len == 0) {
  console.log("0개군");
}
