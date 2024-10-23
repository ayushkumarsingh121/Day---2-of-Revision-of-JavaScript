// Categorizing Products:
// You have an array of products with name and stock properties. Add a status property that indicates whether the product is in stock (stock > 0) or out of stock.
// let products = [
//   { name: 'Laptop', stock: 10 },
//   { name: 'Phone', stock: 0 },
//   { name: 'Tablet', stock: 5 }
// ];

// let categorizedProducts = products.map((product) => {
//   // Answer: { name: 'Laptop', stock: 10, status: 'in stock' }, { name: 'Phone', stock: 0, status: 'out of stock' }, { name: 'Tablet', stock: 5, status: 'in stock' }
// });


let products = [
  { name: 'Laptop', stock: 10 },
  { name: 'Phone', stock: 0 },
  { name: 'Tablet', stock: 5 }
];

let categorizedProducts = products.map((product) => {
  return{
    ...product,
    status : product.stock > 0 ? "in stock" : "out of stock"
  }
});

console.log(categorizedProducts)
