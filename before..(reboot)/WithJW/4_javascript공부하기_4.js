// 함수
/*
작업을 수행하는 코드를 정의하는 코드 블록.
변수와 마찬가지로 선언한 후 사용
방식 2가지 -> 선언식 및 표현식
*/

// sayHello라는 함수 선언하기
// 1방식. 함수 선언식
function sayHello1() {
    console.log("say Hello!");
}

// 2방식. 함수 표현식
const sayHello2 = function () {
    console.log("say Hello!")
}


// 함수를 사용한다는 것은 실행함을 뜻함. 실행할 때 소괄호를 붙이고 실행되면 중괄호 안에 있는 코드들이 실행.
sayHello1(); // say Hello! 출력

// 함수 인자
/*
함수의 ()내부에 값을 넣을 수도 있다. 인자 or 파라미터라고 함.
ex) f(x) = 3x + 5 -> 수학 : 프로그래밍도 비슷하다.
*/
// ex1)
function calculate(x) { 
    var result = 3 * x + 5;
    console.log('결과 값은' + result + '이다');
}
var result = calculate(5);  

// ex2)
var getAge = function(name, age) {  // 파라미터는 여러개 넣어도 된다
    console.log(name + '은(는) ' + age + '살이다');
}
getAge('kkk',30);   // kkk은(는) 30살이다

// 함수 값 반환(return)
/*
return이라는 표현을 통해 값을 반환할 수 있다. 여기서 값은
모든 자료형(String, number, 배열, 객체) 그리고 함수 또한 return이 가능.
*/
function calculate2(x) {    // 함수를 실행 했을 때 return이 있어야지만 값을 얻을 수 있다.
    var result2 = 3 * x + 5;
    return result2;     // 실행 결과 값으로 result2를 반환 한다.
}
var value1 = calculate2(5)
console.log(value1);

// 입력한 파라미터를 profile 객체로 만들어주는 함수
function getProfile(profile_name, profile_age) {
    return {    // 객체를 return 한다 여기선
        name3 : profile_name,
        age3 : profile_age
    }
}
var profile = getProfile('kkk',30); // name, age를 key로 가지는 객체를 받는다.
console.log(profile.name3);

// return을 하게 되면, return 아래에 있는 코드는 실행되지 않는다(return은 함수를 종료시키는 구문이기도 하다.)
/* ex
function sayHello(){
    console.log('good');    // 실행 o
    return;
    console.log('bad');     // 실행 x (리턴 아래 코드는 실행 되지 않음)
}
*/


// 함수에서 주의할 점
/**
 * 1. 일반적으로 함수 안에 선언된 변수는 밖에서 사용이 불가능.
 * ex1) funtion sayHello(){
 * var name = 'kkk'
 * }
 * console.log(name);   // -> undefined가 출력
 * 
 * 2. 반면 함수 밖에서 선언된 변수는 함수 {}안에서 사용이 가능.
 * ex2) var name = 'kkk';
 * function getName(){
 * console.log(name);}      // 여기서 사용되는 name은 함수의 인자인 name이다. 만약 함수 인자가 name이 아니라면 위의 변수 name을 가리킨다.
 * getName()    // -> kkk가 출력
 * 
 * 
 * {}를 기준으로 밖에 있는 변수는 안ㅅ에서도 사용이 가능하다고 생각하면 된다. -> if문에서도 중괄호가 사용되니까 마찬가지이다.
 */


// ---------------------------------------------------------------------------------------

// 문제!!
var products_1 = [{
    name_1 : '농구공',
    desc_1 : 'kkk1의 농구공',
    price_1 : 10000,
    seller_1 : 'kkk1'
}, {
    name_1 : '축구공',
    desc_1 : 'kkk2의 축구공',
    price_1 : 15000,
    seller_1 : 'kkk2'
}]
// 1. 인자로 배열을 받았을 때 길이를 return 하는 함수를 만딜기. 그리고 products_1 넣어서 실행해보기
function propro(배열){  // 인자로 배열을 받았을 떄
    return 배열.length    
}
propro(products_1);
var 길이 = propro(products_1);

// 2. 제품 객체에 넣었을 때 product의 seller_1을 반환하는 함수를 만들어 보기, 그리고 products_1의 첫번째 값을 넣어서 실행해 보기.
const getProductSeller = function(제품){
    return 제품.seller_1
}
getProductSeller(products_1[0]);