var product = {
  title: "BasketBall",
  display: "🏀",
  price: "50$",
};
// product의 name값을 얻고 싶다면?
var productName = product["name"];
console.log(productName);
console.log(product);

console.log();

// product에 새로운 값을 추가, 변경하고 싶다면?
product["name"] = "GoodBall";
console.log(product);
console.log(product.name);
product["seller"] = "Me";
console.log(product.seller);

console.log();
console.log("----------------------------");
console.log();

// quiz
/**
 * 1. object, array의 자료형을 이용해서 3개의 상품이 들어있는 배열(array)를 만들어보세요.
 * 2. 1번에서 만든 product 변수에서 2번쨰의 상품의 name을 추출해 보세요.
 */
let arrEx = ["basketball", "soccerball", "baseball"];
let twoOFArrEx = arrEx[1];
console.log(twoOFArrEx);

console.log();

let objEx1 = {
  content: "basketball",
  display: "🏀",
  price: "30$",
};
objEx1["test"] = "test";
console.log(objEx1);
