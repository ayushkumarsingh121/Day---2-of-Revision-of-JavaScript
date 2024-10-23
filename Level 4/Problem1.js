// Question 1: Calculate Highest and Lowest Marks, and Attendance Status
// Task: Given an array of student objects where each student has a name, marks (array of integers), and attendance (object with days present and total days), use map() to create a new array of student objects where each student has the name, the highest mark, the lowest mark, and a boolean value indicating if their attendance is above 75%.
// const students = [
//   {
//     name: "John",
//     marks: [85, 90, 78],
//     attendance: { daysPresent: 18, totalDays: 20 },
//   },
//   {
//     name: "Alice",
//     marks: [88, 76, 92],
//     attendance: { daysPresent: 14, totalDays: 20 },
//   },
// ];

// Expected Output:
// [
//   { name: "John", highestMark: 90, lowestMark: 78, isAbove75Percent: true },
//   { name: "Alice", highestMark: 92, lowestMark: 76, isAbove75Percent: false }
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
    attendance: { daysPresent: 14, totalDays: 20 },
  },
];

let arr = students.map((student)=>{

  let highMarks = -Infinity;  // Start with a very low value
  let lowerMarks = Infinity;  // Start with a very high value

  for(let i=0; i<student.marks.length; i++){

    if(student.marks[i] > highMarks){
      highMarks = student.marks[i]
    }

    if(student.marks[i] < lowerMarks){
      lowerMarks =  student.marks[i]
    }

  }

  let value = (student.attendance.daysPresent / student.attendance.totalDays) * 100

  return{
    name : student.name,
    highestMark : highMarks,
    lowestMark : lowerMarks,
    isAbove75Percent : (value >= 75)
  }
})
console.log(arr)