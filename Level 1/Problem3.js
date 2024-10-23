//Combining Map with Arithmetic: Given an array of integers [2, 4, 6, 8, 10], use a map function to first divide each number by 2, and then add 5 to the result. What will be the resulting array?

let arr = [2, 4, 6, 8, 10];
let divideArr = arr.map((item)=>{
  return (item / 2) + 5;
})

console.log(divideArr)