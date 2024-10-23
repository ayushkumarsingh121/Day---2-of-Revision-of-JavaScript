// Squaring Numbers using Map: Given an array of integers [1, 3, 5, 7, 9], use a map function to square each number. What will be the resulting array?

let arr = [1, 3, 5, 7, 9];
let squareArr = arr.map((item)=>{
  return item*item;
})

console.log(squareArr)