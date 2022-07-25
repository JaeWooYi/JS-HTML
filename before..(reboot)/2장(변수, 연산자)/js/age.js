function calc(){    // 함수 calc() 선언과 구현.
    var currentYear = 2022; // 올해 년도를 저장 : 변수 currentYear에 저장함.
    var birthYear = prompt("Please enter the year of birth!!","YYYY");  // 사용자로부터 입력을 받은 값으로 변수 birthYear에 저장
    var age = 0;    // 변수 age를 0으로 초기화
    age = currentYear - birthYear + 1   // 실제 나이를 구하기 위한 코드
    document.querySelector("#result").innerHTML = // document는 현재 웹브라우저의 페이즈를 뜻함, 
    //querySelector()는 id가 result인 웹 요소(div)를 의미, innnerHtml은 대입한 값으로 html문서에 대체하시오란 뜻. 
        "Your age is " + age + "years old";
}