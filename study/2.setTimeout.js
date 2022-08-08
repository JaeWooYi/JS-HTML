/**
 * javascript에서 제공하는 많은 함수, 라이브러리들을 사용할때 콜백 함수를 사용한다.
 * callback function은 보통 인자에 넣어서 많이 사용된다.
 */

// setTimeout함수에 익명함수를 넣은것.
setTimeout(function () {
  console.log("3초뒤 실행해 주세요");
}, 3000);

console.log();
console.log("--------------------------------------------");
console.log();

// setInterval함수에 익명함수를 넣은것.
// setInterval(function(){
//     '3초마다 출력해주세여'
// },3000);
