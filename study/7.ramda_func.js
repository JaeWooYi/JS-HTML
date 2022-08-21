function getName(name) {
  return `${name} 입니다`;
}
let abc = "abc";
abc = getName(abc);
console.log(abc);

console.log();

let abc2 = name => {
  return `${name} 입니다`;
};
let good = "good";
console.log(abc2(good));
