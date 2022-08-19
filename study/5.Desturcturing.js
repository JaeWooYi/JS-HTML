/**
 * 기존
 */
const KKK1 = {
  name: "KKK",
  age: 10,
};

const KKK2 = ["KKK1", "KKK2"];

var name = KKK1.name;
var age = KKK1.age;
var first = KKK2[0];
var second = KKK2[1];

console.log(name);
console.log(age);
console.log(first);
console.log(second);

console.log();

/**
 * Destructuring방식
 */
var { name, age } = KKK1;
console.log(name);
const [abc, def] = KKK2;
console.log(abc + ", " + def);
