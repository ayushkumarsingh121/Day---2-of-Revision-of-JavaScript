// Updating Student Grades:
// You have an array of students, each with a name and grade. Increase each student's grade by 5 points.

// let students = [
//   { name: 'Alice', grade: 85 },
//   { name: 'Bob', grade: 90 },
//   { name: 'Charlie', grade: 78 }
// ];

// let updatedGrades = students.map((student) => {
//   // Answer: { name: 'Alice', grade: 90 }, { name: 'Bob', grade: 95 }, { name: 'Charlie', grade: 83 }
// });




let students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 90 },
  { name: 'Charlie', grade: 78 }
];

let updatedGrades = students.map((student) => {
  let incrementGrades = student.grade + 5
  return{
    name : student.name,
    grade : incrementGrades
  }
});

console.log(updatedGrades)
