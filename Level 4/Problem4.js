// Question 1: Calculate Grade and Scholarship Eligibility
// Task: Given an array of student objects where each student has a name, marks (array of scores), and attendance (object with days present, total days, and a field indicating if the student has participated in extracurricular activities), use map() to create a new array of student objects where each student has the name, average score, a grade (A, B, C, or D based on the average), and a boolean indicating if they are eligible for a scholarship (average score above 85 and participated in extracurricular activities).

// const students = [
//   {
//     name: "John",
//     marks: [85, 90, 78],
//     attendance: { daysPresent: 18, totalDays: 20, participatedInExtracurriculars: true },
//   },
//   {
//     name: "Alice",
//     marks: [88, 76, 92],
//     attendance: { daysPresent: 16, totalDays: 20, participatedInExtracurriculars: false },
//   },
// ];

// Expected Output:
// [
//   { name: "John", averageScore: 84.33, grade: "B", isEligibleForScholarship: true },
//   { name: "Alice", averageScore: 85.33, grade: "B", isEligibleForScholarship: false }
// ]


const students = [
  {
    name: "John",
    marks: [85, 90, 78],
    attendance: { daysPresent: 18, totalDays: 20, participatedInExtracurriculars: true },
  },
  {
    name: "Alice",
    marks: [88, 76, 92],
    attendance: { daysPresent: 16, totalDays: 20, participatedInExtracurriculars: false },
  },
];

let arr = students.map((item)=>{
  let sum = 0
  for(let i=0; i<item.marks.length; i++){
    sum = sum + item.marks[i]
  }
  // console.log(sum)

  let avg = sum / item.marks.length
  // console.log(avg)


  let studentGrade;
  (avg >= 90) ? studentGrade = "A" : studentGrade = "B"

  let scholarship;
  (avg > 85) ? scholarship = true : scholarship = false;

  return{
    name : item.name,
    averageScore : avg,
    grade : studentGrade,
    isEligibleForScholarship : scholarship
  }
})

console.log(arr)