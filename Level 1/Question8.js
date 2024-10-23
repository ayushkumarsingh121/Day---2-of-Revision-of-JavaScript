// Question: Given an array of strings, use map() to create a new array where each string is reversed.
// const words = ['hello', 'world', 'javascript'];
// Expected output: ['olleh', 'dlrow', 'tpircsavaj']

const words = ['hello', 'world', 'javascript']

let arr = words.map((item)=>{
  return item.split('').reverse().join('');
})

console.log(arr)