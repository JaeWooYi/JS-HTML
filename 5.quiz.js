var product = [
  {
    name: "basketball",
    display: "π",
    price: "50$",
    seller: "KKK",
  },
  {
    name: "soccerball",
    display: "β½οΈ",
    price: "30$",
    seller: "ZZZ",
  },
];

/**
 * 1. product λ°°μ΄μ λ£μμ λ, κ·Έ μμ κ°κ²©μ μμλλ‘ μΆλ ₯ νλ ν¨μ
 */

function orderPrint(arr) {
  for (let i = 0; i < arr.length; i++) {
    var result = arr[i].price;
    console.log(result);
  }
}
orderPrint(product);
