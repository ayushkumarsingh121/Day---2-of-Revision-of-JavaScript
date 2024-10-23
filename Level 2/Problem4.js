// 4. Manipulating Nested Object Properties:
// You have an array of objects representing employees, where each object contains name and salary properties:

// let employees = [
//   { name: 'John', salary: 40000 },
//   { name: 'Jane', salary: 55000 },
//   { name: 'Jim', salary: 50000 }
// ];

// Use the map function to give each employee a 10% raise. What will be the resulting array?

let employees = [
  { name: 'John', salary: 40000 },
  { name: 'Jane', salary: 55000 },
  { name: 'Jim', salary: 50000 }
];

let arr = employees.map((item)=>{
  let increment = item.salary / 10
  // console.log(increment)
  return{
    name : item.name,
    salary : item.salary + increment
  }
})

console.log(arr)