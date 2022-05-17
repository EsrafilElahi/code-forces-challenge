


let a = 'abs';
let b = 'Abv';

function answer(a, b) {
  let res;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i].toLowerCase() === b[i].toLowerCase()) {
        res = 0;
      } else if (a[i].toLowerCase() > b[i].toLowerCase()) {
        res = 1;
      } else {
        res = -1;
      }
    }

  }
  console.log(res)
}

answer(a, b)







