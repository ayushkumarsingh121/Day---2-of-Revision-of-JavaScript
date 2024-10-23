// 1. Map with Objects and Nested Properties:
// Given an array of objects representing products, where each object has a name and price in USD:
// let products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Phone', price: 800 },
//   { name: 'Tablet', price: 500 }
// ];
// Use a map function to convert the price of each product from USD to INR (assuming 1 USD = 80 INR). What will be the resulting array of products with updated prices?

let products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 500 }
];

let result = products.map((item)=>{
  return {
    name : item.name,
    price : item.price * 80
  }
})

console.log(result)