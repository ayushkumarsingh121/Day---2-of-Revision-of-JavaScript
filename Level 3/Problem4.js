// Question: Given an array of order objects where each object contains orderId, products (array of objects with name and quantity), use map() to create a new array where each order object includes the total number of products ordered.
// const orders = [
//   { orderId: 101, products: [{ name: 'Shoes', quantity: 2 }, { name: 'Hat', quantity: 1 }] },
//   { orderId: 102, products: [{ name: 'Shirt', quantity: 3 }, { name: 'Jeans', quantity: 2 }] }
// ];
// Expected output: [
//   { orderId: 101, totalProducts: 3 },
//   { orderId: 102, totalProducts: 5 }
// ]


const orders = [
  { orderId: 101, products: [{ name: 'Shoes', quantity: 2 }, { name: 'Hat', quantity: 1 }] },
  { orderId: 102, products: [{ name: 'Shirt', quantity: 3 }, { name: 'Jeans', quantity: 2 }] }
];

let arr = orders.map((item)=>{
  let allStuff = item.products
  let sum = 0
  for(let i=0; i<allStuff.length; i++){
    sum = sum + allStuff[i].quantity
  }
  // console.log(allStuff)
  return{
    orderId : item.orderId,
    totalProduct : sum
  }
})

console.log(arr)