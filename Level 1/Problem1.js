// Addition in Map: Given an array of integers [1, 2, 3, 4, 5], use a map function to add 10 to each number. What will be the resulting array?

let arr =  [1, 2, 3, 4, 5];
let newArr = arr.map((item)=>{
  return item + 10;
})
console.log(newArr)


