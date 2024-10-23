// Question: You have an array of arrays, where each sub-array contains numbers. Use map() to return an array of sums, where each sum represents the sum of elements in the sub-array.
// const arrays = [[1, 2, 3], [4, 5], [6]];
// Expected output: [6, 9, 6]


const arrays = [[1, 2, 3], [4, 5], [6]];

let arr = arrays.map((item)=>{
  let sum = 0
  for(let i=0; i<item.length; i++){
    sum = sum + item[i]
  }
  return sum
})
console.log(arr)
