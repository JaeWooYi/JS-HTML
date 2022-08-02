var objs = [
  { name: "basketball", display: "🏀", price: 100000 },
  { name: "soccerball", display: "⚽️", price: 50000 },
  { name: "baseball", display: "⚾️", price: 75000 },
];

/**
 * 1. products 배열을 넣었을 때, 가격이 60000원 이상인 product객체를 담은 배열을 반환하는 함수를 만들기
 */
function test(arr) {
  for (let i = 0; i < arr.length; i++) {
    var result1 = arr[i].price;
    if (result1 >= 60000) {
      var answer = arr[i];
      console.log(answer);
    }
  }
}

test(objs);
