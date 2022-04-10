function randomZeroOne() {
  var y = Math.random();
  if (y < 0.5) y = 0;
  else y = 1;

  return y;
}

function solvableProblem(txtRow) {
  let slices = txtRow.split('');
  let one = 0;
  for (let n of slices) {
    if (n === '1') one++;
  }
  if (one > 1) return true;
  return false;
}

function calculateItems(n) {
  let solvable = 0;
  for (let i = 0; i < n; i++) {
    let item = `${randomZeroOne()} ${randomZeroOne()} ${randomZeroOne()}`;
    if (solvableProblem(item)) solvable++;
    console.log(item);
  }
  console.log(`solvable problem by friends : ${solvable}`);
}

calculateItems(4);
