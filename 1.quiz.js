var product = {
  title: "BasketBall",
  display: "๐",
  price: "50$",
};
// product์ name๊ฐ์ ์ป๊ณ  ์ถ๋ค๋ฉด?
var productName = product["name"];
console.log(productName);
console.log(product);

console.log();

// product์ ์๋ก์ด ๊ฐ์ ์ถ๊ฐ, ๋ณ๊ฒฝํ๊ณ  ์ถ๋ค๋ฉด?
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
 * 1. object, array์ ์๋ฃํ์ ์ด์ฉํด์ 3๊ฐ์ ์ํ์ด ๋ค์ด์๋ ๋ฐฐ์ด(array)๋ฅผ ๋ง๋ค์ด๋ณด์ธ์.
 * 2. 1๋ฒ์์ ๋ง๋  product ๋ณ์์์ 2๋ฒ์จฐ์ ์ํ์ name์ ์ถ์ถํด ๋ณด์ธ์.
 */
let arrEx = ["basketball", "soccerball", "baseball"];
let twoOFArrEx = arrEx[1];
console.log(twoOFArrEx);

console.log();

let objEx1 = {
  content: "basketball",
  display: "๐",
  price: "30$",
};
objEx1["test"] = "test";
console.log(objEx1);
