// Calculating Final Prices:
// You have an array of items with name, price, and discount properties. Calculate the final price after applying the discount.
// let items = [
//   { name: 'T-shirt', price: 500, discount: 20 },
//   { name: 'Jeans', price: 1200, discount: 15 },
//   { name: 'Jacket', price: 3000, discount: 10 }
// ];

// let finalPrices = items.map((item) => {
//   // Answer: { name: 'T-shirt', price: 400 }, { name: 'Jeans', price: 1020 }, { name: 'Jacket', price: 2700 }
// });

let items = [
  { name: "T-shirt", price: 500, discount: 20 },
  { name: "Jeans", price: 1200, discount: 15 },
  { name: "Jacket", price: 3000, discount: 10 },
];

let finalPrices = items.map((item) => {
  return{
    name : item.name,
    price : item.price - (item.price * item.discount/100)
  }
});

console.log(finalPrices)
