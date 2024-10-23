// 3. Adding a New Property to Objects:
// You have an array of users, each with name and age properties:
// let users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// Use the map function to add a new property isAdult to each object, where the value is true if the user's age is 18 or above, and false otherwise. What will be the resulting array?


// first way to solve this problem
let users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 14 },
  { name: 'Charlie', age: 35 }
];

let arr = users.map((item)=>{
  let abc = {
    name : item.name,
    age : item.age,
    isAdult : item.isAdult
  }
  return{
    ...item,
    isAdult : item.age >= 18 ? true : false
  }
})

console.log(arr)


// second way to solve this problem

let arr2 = users.map((item)=>{
  let condition = item.age >= 18 ? true : false
  return{
    ...item,
    isAdult : condition
  }
})

console.log(arr2)