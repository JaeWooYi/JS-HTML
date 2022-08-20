var products = [
  {
    name: "농구공",
    price: 50000,
  },
  {
    name: "축구공",
    price: 50000,
  },
];

for (let i = 0; i < products.length; i++) {
  let name = products[i].name;
  console.log(name);
}

console.log();
console.log("----------------------------------------------------------------");
console.log();

products.forEach(function (product, index) {
  console.log(index);
  console.log(product);
});

console.log();
console.log("----------------------------------------------------------------");
console.log();

products.map((product, index) => {
  console.log(index);
  console.log(product);
});

console.log();
console.log("----------------------------------------------------------------");
console.log();

products.forEach(function (product, index) {
  console.log(index);
  console.log(product.name);
});

console.log();
console.log("----------------------------------------------------------------");
console.log();

products.map((article, index) => {
  console.log(index);
  console.log(article.name);
});

console.log();
console.log("----------------------------------------------------------------");
console.log();

/**
 * map은 return이 가능하다
 */
var productNames = products.map((article, index) => {
  return article.name;
});
console.log(productNames);

var productPrice = products.map((article, index) => {
  return article.price;
});
console.log(productPrice);
