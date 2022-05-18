let money = window.prompt('your money');
let apple = window.prompt('your apple cost');
let orange = window.prompt('your apple cost');


function calculate(money, appleCost, orangeCost) {
  if (money >= (appleCost + orangeCost)) return true;
  return false;
}

console.log(calculate(money, apple, orange));

