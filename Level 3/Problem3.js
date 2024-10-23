// Question: Given an array of product objects, where each object contains a name, price, and discount (object with percentage and expiryDate), use map() to create a new array where each object includes the final price after applying the discount (ignore expiry date logic).
// const products = [
//   { name: 'Laptop', price: 1000, discount: { percentage: 10, expiryDate: '2024-12-01' } },
//   { name: 'Phone', price: 500, discount: { percentage: 5, expiryDate: '2024-11-15' } }
// ];
// Expected output: [
//   { name: 'Laptop', finalPrice: 900 },
//   { name: 'Phone', finalPrice: 475 }
// ]



const products = [
  { name: 'Laptop', price: 1000, discount: { percentage: 10, expiryDate: '2024-12-01' } },
  { name: 'Phone', price: 500, discount: { percentage: 5, expiryDate: '2024-11-15' } }
];

let arr = products.map((item)=> {
  let total = item.price - item.price * (item.discount.percentage / 100)
  return{
    name : item.name,
    finalPrice : total,
    expiryDate : item.discount.expiryDate
  }
})
console.log(arr)