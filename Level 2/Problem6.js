// 6. Converting Object Values Based on Condition:
// You have an array of products, where each product has name, price, and discount properties. If a product has a discount of 20% or higher, mark it as "on sale":

// let products = [
//   { name: 'Shirt', price: 1000, discount: 15 },
//   { name: 'Shoes', price: 3000, discount: 25 },
//   { name: 'Hat', price: 500, discount: 20 }
// ];

// Use the map function to add an onSale property to each object, where the value is true if the discount is 20% or higher, otherwise false. What will be the resulting array?


let products = [
  { name: 'Shirt', price: 1000, discount: 15 },
  { name: 'Shoes', price: 3000, discount: 25 },
  { name: 'Hat', price: 500, discount: 20 }
];


let arr = products.map((item)=>{
  let Condition = item.discount >= 20 ?  true : false
  return{
    ...item,
    onSale : Condition
  }
})

console.log(arr)