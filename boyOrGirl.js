
let name = window.prompt("your user name!");
let nameArr = name.trim().split("");

function repeat(arr) {
  return arr.filter((item, index) => item != " " && arr.indexOf(item) === index)
}

const sample = repeat(nameArr);

let res = sample.length % 2 === 0 ? "CHAT WITH HER!" : "IGNORE HIM!"

console.log(res);










