
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

let arr = students.map((student) => {
  let totalScore = 0;
  let bonusPoints = 0;
  let hardSubjectsScore = 0;
  let hardSubjectsCount = 0;

  student.marks.map((mark) => {
    let modifiedScore = mark.score;

    // Add 5 bonus points for scores >= 90
    if (mark.score >= 90) {
      bonusPoints += 5;
    }

    // Multiply by 1.2 if the difficulty is "hard"
    if (mark.difficulty === "hard") {
      modifiedScore *= 1.2;
      hardSubjectsScore += modifiedScore;
      hardSubjectsCount++;
    }

    // Add to total score
    totalScore += modifiedScore;
  });

  // Add bonus points to the total final score
  let finalMarks = totalScore + bonusPoints;

  // Calculate averages
  let overallAverage = totalScore / student.marks.length;
  let hardSubjectsAverage = hardSubjectsCount > 0 ? hardSubjectsScore / hardSubjectsCount : 0;

  // Determine performance evaluation
  let performanceEvaluation = "Needs Improvement";
  if (hardSubjectsAverage > 85 && overallAverage > 80) {
    performanceEvaluation = "Outstanding";
  } else if (overallAverage > 70) {
    performanceEvaluation = "Satisfactory";
  }

  // Return final object with rounded final marks
  return {
    name: student.name,
    finalMarks: Math.round(finalMarks),
    performanceEvaluation: performanceEvaluation
  };
});

console.log(arr);
