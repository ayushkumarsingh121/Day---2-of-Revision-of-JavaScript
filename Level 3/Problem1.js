// Calculating Total Weight:
// You have an array of boxes, each with a length, width, and height. Calculate the total weight for each box, assuming the weight is calculated as length * width * height.

// let boxes = [
//   { length: 2, width: 3, height: 4 },
//   { length: 5, width: 2, height: 1 },
//   { length: 3, width: 3, height: 3 }
// ];
// Answer: [{ length: 2, width: 3, height: 4, weight: 24 }, { length: 5, width: 2, height: 1, weight: 10 }, { length: 3, width: 3, height: 3, weight: 27 }]


let boxes = [
  { length: 2, width: 3, height: 4 },
  { length: 5, width: 2, height: 1 },
  { length: 3, width: 3, height: 3 }
];

let arr = boxes.map((item)=>{
  let boxWeight = item.length * item.height * item.width
  return{
    ...item,
    weight : boxWeight 
  }
})

console.log(arr)