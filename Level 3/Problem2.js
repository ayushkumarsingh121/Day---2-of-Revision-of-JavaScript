// Question: You have an array of objects representing students, where each object contains name, marks (array of numbers), and attendance (object with daysPresent and totalDays). Use map() to create a new array where each object contains the name, the average marks, and the attendance percentage.

// const students = [
//   { name: 'John', marks: [85, 90, 78], attendance: { daysPresent: 18, totalDays: 20 } },
//   { name: 'Alice', marks: [88, 76, 92], attendance: { daysPresent: 16, totalDays: 20 } }
// ];
// Expected output: [
//   { name: 'John', avgMarks: 84.33, attendancePercentage: 90 },
//   { name: 'Alice', avgMarks: 85.33, attendancePercentage: 80 }
// ]

const students = [
  {
    name: "John",
    marks: [85, 90, 78],
    attendance: { daysPresent: 18, totalDays: 20 },
  },
  {
    name: "Alice",
    marks: [88, 76, 92],
    attendance: { daysPresent: 16, totalDays: 20 },
  },
];

let arr = students.map((item) => {
  let sum = 0;
  for (let i = 0; i < item.marks.length; i++) {
    sum = sum + item.marks[i];
  }
  let avg = sum / item.marks.length;
  // console.log(avg)

  let atten = (item.attendance.daysPresent / item.attendance.totalDays) * 100;
  // console.log(atten)

  return {
    name: item.name,
    avgmarks: avg,
    attendancePercentage: atten,
  };
});
console.log(arr);

// we write this but
// avgmarks : avg,
// attendancePercentage: atten

// but why not this
// avgmarks : item.avg,
// attendancePercentage: item.atten

// because i want to add new stuff inside the all items not accessing the properites of the original items object so why do we need item.avg etc 

// avg ke andar to item laga hi diye hai bro
// atten ke andar bhi item laga hi diye hai na bro
