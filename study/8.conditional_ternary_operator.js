const language = "JavaScript";

if (language == "Java") {
  console.log("true");
} else {
  console.log("false");
}

console.log();

// 위 if문을 삼항 연산자로 만들어 볼까?
language === "JavaScript" ? console.log("true") : console.log("false");
language === "Java" ? console.log("true") : console.log("false");
