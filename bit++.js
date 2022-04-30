let x = Number(prompt("range 1-150"))

function generateOperation(x) {
  let initialValue = 0;
  console.log(x)
  for (i = 1; i <= x; i++) {
    let y = Math.random();
    if (y < 0.5) {
      ++initialValue;
      console.log(`++X`);
    }
    else {
      --initialValue;
      console.log(`--X`);
    }
  }
  console.log(initialValue);
}

generateOperation(x)

