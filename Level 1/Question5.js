// Question: Use map() to create an array of boolean values from an array of numbers. If a number is even, the corresponding boolean value should be true, otherwise false.
// const numbers = [1, 2, 3, 4, 5];
// Expected output: [false, true, false, true, false]

const numbers = [1, 2, 3, 4, 5];

let arr = numbers.map((item)=>{
  return item % 2 == 0 ? true : false
})
console.log(arr)

// simple way

for(let i = 0; i<numbers.length; i++){
  if(numbers[i] % 2 == 0){
    return true;
  }
}
return false


