// Question: You have an array of objects, each with a price and quantity. Use map() to create a new array containing the total cost for each object (i.e., price * quantity).
// const items = [
//   { price: 10, quantity: 2 },
//   { price: 15, quantity: 1 },
//   { price: 5, quantity: 4 }
// ];
// Expected output: [20, 15, 20]


const items = [
    { price: 10, quantity: 2 },
    { price: 15, quantity: 1 },
    { price: 5, quantity: 4 }
  ];

  let arr = items.map((product)=>{
    return{
      ...product,
      totalCost : product.price * product.quantity
    }
  })

  console.log(arr)

  // for expected restult

  let arr2 = items.map((stuff)=>{
    return{
      totalCost : stuff.price * stuff.quantity
    }
  })

  console.log(arr2)