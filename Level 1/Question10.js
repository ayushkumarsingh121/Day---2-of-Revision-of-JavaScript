// Question: Given an array of objects, each with firstName and lastName, use map() to create a new array of full names (i.e., firstName + " " + lastName).

// const people = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jane', lastName: 'Smith' }
// ];
// Expected output: ['John Doe', 'Jane Smith']


const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' }
]

let arr = people.map((item)=>{
  return{
    fullName : item.firstName + item.lastName
  }
})
console.log(arr)



// for expected output

let arr2 = people.map((item)=>{
  return item.firstName + item.lastName
})
console.log(arr2)