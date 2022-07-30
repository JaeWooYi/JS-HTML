var product = [
  {
    name: "basketball",
    display: "🏀",
    price: "50$",
  },
  {
    name: "soccerball",
    display: "⚽️",
    price: "40$",
  },
];

/**
 * product의 길이가 1개 이상이면 첫번째 상품 객체의 name이 '축구공'인지 확인하는 연산자 작성하기
 */
if (product.length >= 0) {
  console.log(product[0].name === "soccerball");
}
