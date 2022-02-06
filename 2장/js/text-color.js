        // heading 변수를 선언후 h1 태그를 저장
        var heading = document.querySelector("#heading");
        // h1태그를 클릭시 글자색을 green으로 변경 설정.
        heading.onclick = function() {
            heading.style.color = "green";
        }