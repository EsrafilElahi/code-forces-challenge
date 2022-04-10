function greaterThanTen(arr) {
  if (arr.length > 10) return true;
  return false;
}

function calculateWordLength(word) {
  let wordArr = word.split('');

  if (greaterThanTen(wordArr)) {
    let firstItem = wordArr[0];
    let lastItem = wordArr[wordArr.length - 1];
    let res = `${firstItem}${wordArr.length - 2}${lastItem}`;
    console.log(res);
  }
  else {
    console.log('not greater than ten');
  }
}

calculateWordLength('HellGoodWorld');
