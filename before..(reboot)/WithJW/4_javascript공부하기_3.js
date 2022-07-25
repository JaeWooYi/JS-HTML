// 조건문 -> 조건에 따라 로직을 다르게 수행
// ex) 1. 로그인 한 사람에게는 프로필 이미지를 보여준다. 아니라면 로그인 버튼을 보여준다.
//     2. 상품 정보들이 1개 이상이면 상품 화면들을 보여준다. 아니라면 상품 준비중 화면을 보여준다.

// 형태 : if(조건) {//로직}
// 조건이 true일 때 수행, false, null, 0, "", undifined일 때 로직을 수행하지 않음.

// 실습
var name1 = 'kkk';
var age1 = 27;
if(name1 === 'kkk'){
    console.log('kkk goood')
}
if(name1 !== 'kkk'){
    console.log('kkk bad')  // 위 조건이 false이므로 실행 되지 않음.
}
if(age1 > 25){
    console.log('25세 이상')
}
if(name1){
    console.log('위 조건에 값이 들어있기 때문에 수행')
}
var empty = '';
if(empty){
    console.log('빈 값은 false와 비슷한 의미이므로 수행하지 않음')
}

// 형태 : else 와 else if -> 값이 true이면 if안의 로직이 수행되지만 만일 아닐 경우 else로 처리, 3가지 이상의 로직일 경우 else if까지 사용.
// ex1
var name2 = 'kkk';
var age2 = 27;
// if else else if
if(age2 > 25 && name2==="jjj"){     // 조건 false
    console.log('kkk군');
} else {
    console.log('kkk아니자나'); // 이게 출력 되겠지?
}
//---------------------------------------------------------------
// ex2
if(age2 > 30){  // 조건 false이므로 else if로직으로 간다
    console.log('30대야?');
} else if (age2>25){    // true이므로 이게 수행
    console.log('20대군');
} else {
    console.log('더 정진하도록');
}

// 문제
var products3 = [{
    name3: '농구공',
    description3: 'kkk의 농구공',
    price : 10000
}, {
    name3: '축구공',
    description3: 'kkk의 축구공',
    price : 20000
}]
// 1. 위 products3의 갯수가 1개 이상일 때와 아닐 때의 나누는 조건문
if(products3.length >= 1){
    console.log('1개 이상이군')
} else {
    console.log('1개 이상이 아니군')
}
// 2. products3의 갯수가 5개 이상일 때, 1~4개 사이일 때, 0개일 때 조건문
if(products3.length >=5){
    console.log('5개 이상이군')
} else if (products3.length > 0){       // && products3.length < 5 -> 이거 안해도 됌, 어차피 위에서 5이상이면 실행되기 때문에
    console.log('1개 이상 4개 이하')
} else {                                // (products3.length ===0) 이거도 위와 같은 맥락으로 쓸 필요가 없겠지?
    console.log('0개 이상이군')
}
