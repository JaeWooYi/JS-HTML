function showPrice() {
    // 사용자가 입력한 값을 2개의 변수에 저장.
    var oPrice = document.querySelector("#originPrice").value;
    var rate = document.querySelector("#discountRate").value;

    // 2개의 값이 음수가 아니라면 실행해라
    if(oPrice > 0 && rate > 0){
        var savedPrice = oPrice * (rate/100);
        var resultPrice = oPrice - savedPrice;
    }

    document.querySelector("#showResult").innerHTML = "상품의 원 가격은 " 
    + oPrice + "원이고, 할인율은 " + rate + "%입니다 " + savedPrice + 
    "원을 절약한 " + resultPrice + "원에 살 수 있습니다.";
}