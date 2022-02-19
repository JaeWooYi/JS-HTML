// 기본 연산자  (산술 연산자, 문자열 연산자)
var num1 = 5;
var num2 = 3;
var char1 = "imitaition";
var char2 = "man";
var num3 = num1 + num2; // 8
var char3 = char1 + ' ' + char2;    // imitation man
var charNumMixed = char1 + num1;    // imitation5

// 비교 연산자 (>, <, <=, >=, ===, !==)로 boolean 값을 변환.
var name = 'YJW';
var isFool = true;
var num = 100;
console.log(num < 5);   // false
console.log(num === 'YJW')  // true
console.log(num !== 'HGD')  // true

// 부정 연산자 (! -> true와 false를 서로 변환)
var nope = false;
var yes = !nope // true
!nope   // true
!!nope  // false

// 논리 연산자 -> 다른 연산자들의 실행을 논리적으로 제어하는 연산자
// || -> or :앞의 연산자가 true라면 앞의 연산 값을 반환, false라면 뒤의 연산값을 반환
// && -> and : 앞의 연산자가 true일 때 뒤의 연산 값을 반환.
var name1 = 'YJW';
var age = 31;
// &&는 앞의 연산결과가 true일 때 뒤 연산을 수행
console.log(name1 === 'YJW' && age > 25)    // true
console.log(name1 === 'YJW' && age > 35)    // flase
// ||는 앞의 연산 결과가 true라면 뒤 연산을 실행하지 않음
console.log(name1 === 'YJW' || age < 35)    // true
// ||는 앞의 연산 결과가 false라면 뒤 연산을 수행함.
console.log(name1 === 'YJW' || age > 30)    // true
var nope1 = false;
var yes1= true;
console.log(nope1 || yes1); // 앞이 false니까 true
console.log(nope1 && yes1); // 앞이 false니까 false

// ex)
var products = [{
    name3 : '농구공',
    description : 'JW가 쓰던 농구공',
    price : 10000
}, {
    name3 : '축구공',
    description : 'JW가 쓰던 축구공',
    price : 20000
}]
// 위 배열에서 products의 길이가 1개 이상이면서 첫번째 상품 객체의 name이 '축구공'인지를 확인하는 연산자를 작성해 보아라.
console.log(products.length > 1 && products[0].name3 === '축구공'); // 앞은 true, 뒤는 false -> false가 나온다.