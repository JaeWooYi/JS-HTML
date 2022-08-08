function firstFunction() {
  console.log("first");
}
function secondFuction(callback) {
  callback();
  console.log("good");
}
secondFuction(firstFunction);

console.log();
console.log(
  "------------------------------------------------------------------"
);
console.log();

/**
 * 콜백함수 : 함수가 나중에 불린다 해서 callback함수라고 불린다.
 * cf) 보통 콜백함수를 구현할때 함수의 인자를 넣는 방식으로 진행.
 *
 * 아래 사용 예시처럼 함수로 정의된 변수를 넣지 않고 바로 함수를 넣는것도 가능하다
 * cf) 이를 익명 함수라고도 한다.
 */
secondFuction(function test2() {
  console.log("익명함수 테스트");
});

console.log();
console.log(
  "------------------------------------------------------------------"
);
console.log();

// test1이라는 변수에 익명함수를 넣은것.
const test1 = function () {
  console.log("testGood");
};
test1();

console.log();
console.log(
  "마지막------------------------------------------------------------------"
);
console.log();

function callbackFunc(name) {
  console.log(name);
}
function callbackFunc2(callbackFunc) {
  // 인자이름 callbackFunc로 한건 알아보기 쉬우라고 그렇게 한거야.
  var text = "HIHIHI";
  callbackFunc(text);
}
callbackFunc2(callbackFunc);
