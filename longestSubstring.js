
let s = 'salam folani esh kon';
let sArr = s.split("")

function calculate(arr) {
  return arr.filter((item, index) => item != " " && arr.indexOf(item) === index)
}

const finalStr = calculate(sArr);
const answer = finalStr.length;

console.log(answer);