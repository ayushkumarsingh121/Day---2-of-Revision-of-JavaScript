// Multiplication in Map: Given an array of integers [6, 7, 8, 9, 10], use a map function to multiply each number by 3. What will be the resulting array?

let arr = [6, 7, 8, 9, 10];
let multiplyArr = arr.map((item)=>{
  return item * 3;
})

console.log(multiplyArr)