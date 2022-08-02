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
    price: "30$",
    seller: "ZZZ",
  },
];

/**
 * 1. product 배열을 넣었을 때, 그 안에 가격을 순서대로 출력 하는 함수
 */

function orderPrint(arr) {
  for (let i = 0; i < arr.length; i++) {
    var result = arr[i].price;
    console.log(result);
  }
}
orderPrint(product);
