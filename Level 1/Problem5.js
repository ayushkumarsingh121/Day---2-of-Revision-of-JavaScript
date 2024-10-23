// Converting Prices: Given an array of prices in dollars [5, 10, 20, 30], use a map function to convert each price to INR (assuming 1 USD = 80 INR). What will be the resulting array?

let arr = [5, 10, 20, 30];
let newArr = arr.map((item)=>{
  return item*80;
})

console.log(newArr)