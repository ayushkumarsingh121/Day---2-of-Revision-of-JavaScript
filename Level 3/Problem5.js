// Question: You have an array of employee objects, where each object contains id, name, and performance (an array of review objects with year and score). Use map() to create a new array of employee objects with each employee's highest performance score.
// const employees = [
//   { id: 1, name: 'Alice', performance: [{ year: 2022, score: 80 }, { year: 2023, score: 85 }] },
//   { id: 2, name: 'Bob', performance: [{ year: 2022, score: 75 }, { year: 2023, score: 90 }] }
// ];
// Expected output: [
//   { id: 1, name: 'Alice', highestScore: 85 },
//   { id: 2, name: 'Bob', highestScore: 90 }
// ]

const employees = [
  { id: 1, name: 'Alice', performance: [{ year: 2022, score: 80 }, { year: 2023, score: 85 }] },
  { id: 2, name: 'Bob', performance: [{ year: 2022, score: 75 }, { year: 2023, score: 90 }] }
];

let arr = employees.map((item)=>{
  let upperScore = 0
  let x = item.performance
  for(let i=0; i<x.length; i++){
    let y = x[i].score
    if(y > upperScore){
      upperScore = y
    }
  }
  return{
    id : item.id,
    name : item.name,
    highestScore : upperScore
  }
})

console.log(arr)