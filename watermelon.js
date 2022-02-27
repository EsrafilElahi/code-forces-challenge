// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = {"a": 1, "b": 2}
// const keys = Object.keys(fruits); (array -> index)--> ["0", "1", "2", "3"]
// const keys = Object.values(fruits); (array -> value-esh)--> ["Banana", "Orange", "Apple", "Mango"]
// const keys = Object.keys(f); (object -> keys)--> ["a", "b"]
// const keys = Object.values(f); (object -> values)--> [1, 2]
// console.log(keys)


let w = Number(prompt("range 1-100"))


function devide(weight) {
  let w1 = [...Array(weight - 1).keys()].map(item => item + 1)
  // //   let w1 = Array.from(Array(weight - 1).keys())
  console.log(w1)
  let ok = w1.filter(item => {
    if (item % 2 === 0 && ((weight - item) % 2 === 0)) {
      console.log(`numbers : ${item} ${weight - item}`);
      return true;
    }
  })

  return ok.length > 0

  // way 2 --> return weight > 2 && weight % 2 == 0 && weight < 101

}


console.log(devide(w))




