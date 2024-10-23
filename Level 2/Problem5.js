//  5. Combining and Modifying Object Properties:
// Given an array of students with firstName and lastName properties:

// let students = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jane', lastName: 'Smith' },
//   { firstName: 'Bill', lastName: 'Jones' }
// ];

// Use the map function to combine the firstName and lastName into a new property fullName for each student. What will be the resulting array?



let students = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Bill', lastName: 'Jones' }
];

let arr = students.map((item)=>{
  let fullNameV = `${item.firstName} ${item.lastName}`
  return{
    ...item,
    fullName : fullNameV
  }
})

console.log(arr)