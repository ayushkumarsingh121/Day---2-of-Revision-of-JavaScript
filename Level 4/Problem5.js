
// Here are two difficult-level questions that push the boundaries of data manipulation and logic in JavaScript:

// Question 1: Dynamic Bonus Calculation and Custom Performance Evaluation
// Task: Given an array of student objects where each student has a name, marks (array of objects with subjects, scores, and difficulty level of the subject), and attendance (object with days present, total days, and a boolean field showing if the student was part of any extracurricular activities), create a new array of student objects using map() that includes:

// The student's name
// Final marks, calculated by:
// Adding 5 bonus points for each subject where the score is above 90.
// Multiplying the score by 1.2 if the subject's difficulty level is "hard."
// A custom "performanceEvaluation" based on:
// Scores in "hard" subjects contributing more weight:
// "Outstanding" if the average score across hard subjects is above 85 and overall average is above 80.
// "Satisfactory" if the overall average is above 70 but the hard subjects are below 85.
// "Needs Improvement" otherwise.
// Constraints: The evaluation and final marks must account for subject difficulty and the student’s participation in extracurricular activities.

// Expected Output:
// [
//   { name: "John", finalMarks: 278, performanceEvaluation: "Satisfactory" },
//   { name: "Alice", finalMarks: 312, performanceEvaluation: "Outstanding" }
// ]

const students = [
  {
    name: "John",
    marks: [
      { subject: "Math", score: 95, difficulty: "hard" },
      { subject: "Science", score: 85, difficulty: "medium" },
      { subject: "English", score: 78, difficulty: "easy" }
    ],
    attendance: { daysPresent: 18, totalDays: 20, extracurricular: true },
  },
  {
    name: "Alice",
    marks: [
      { subject: "Math", score: 88, difficulty: "hard" },
      { subject: "Science", score: 92, difficulty: "hard" },
      { subject: "English", score: 76, difficulty: "easy" }
    ],
    attendance: { daysPresent: 16, totalDays: 20, extracurricular: false },
  },
];

let arr = students.map((item)=>{

  let sum = 0
  let bonusPoint = 0
  let diff;

  for(let i=0; i<item.marks.length; i++){
    sum = sum + item.marks[i].score 

    if(item.marks[i].score > 90){
      bonusPoint = bonusPoint + 5
    }

    if(item.marks[i].difficulty === "hard"){
      diff =  item.marks[i].score * 1.2
    }
    // console.log(diff)
  }
  sum  = sum + bonusPoint + diff
  console.log(sum)

 if(item.marks)

  return{
    name : item.name,
    fullMarks : sum,
    // performanceEvaluation: 
  }
})
console.log(arr)