// Question: Given an array of people's names, use map() to create a new array where each name is prefixed with "Hello, ".
// const names = ['Alice', 'Bob', 'Charlie'];
// Expected output: ['Hello, Alice', 'Hello, Bob', 'Hello, Charlie']


const names = ['Alice', 'Bob', 'Charlie'];

let arr = names.map((item)=>{
  return `Hello, ${item}`
})
console.log(arr)