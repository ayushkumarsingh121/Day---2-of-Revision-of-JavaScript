// Question 2: Calculate Weighted Marks and Attendance Rank
// Task: Given an array of student objects where each student has a name, marks (array of objects with subjects and scores), and attendance (object with days present and total days), use map() to create a new array of student objects where each student has the name, weighted marks (calculated by summing all marks and multiplying by 1.5), and an "attendanceRank" (based on their attendance percentage, where above 90% is "Excellent", above 80% is "Good", and below 80% is "Needs Improvement").
// const students = [
//   {
//     name: "John",
//     marks: [
//       { subject: "Math", score: 85 },
//       { subject: "Science", score: 90 },
//       { subject: "English", score: 78 }
//     ],
//     attendance: { daysPresent: 18, totalDays: 20 },
//   },
//   {
//     name: "Alice",
//     marks: [
//       { subject: "Math", score: 88 },
//       { subject: "Science", score: 76 },
//       { subject: "English", score: 92 }
//     ],
//     attendance: { daysPresent: 14, totalDays: 20 },
//   },
// ];

// Expected Output:
// [
//   { name: "John", weightedMarks: 381, attendanceRank: "Excellent" },
//   { name: "Alice", weightedMarks: 384, attendanceRank: "Needs Improvement" }
// ]

const students = [
  {
    name: "John",
    marks: [
      { subject: "Math", score: 85 },
      { subject: "Science", score: 90 },
      { subject: "English", score: 78 },
    ],
    attendance: { daysPresent: 18, totalDays: 20 },
  },
  {
    name: "Alice",
    marks: [
      { subject: "Math", score: 88 },
      { subject: "Science", score: 76 },
      { subject: "English", score: 92 },
    ],
    attendance: { daysPresent: 14, totalDays: 20 },
  },
];

let arr = students.map((item) => {
  let getingMarksArray = item.marks;
  // console.log(getingMarksArray)

  let totalMarks = 0;
  for (let i = 0; i < getingMarksArray.length; i++) {
    // console.log(getingMarksArray[i].score)
    totalMarks = totalMarks + getingMarksArray[i].score;
  }

  let finalWeightedMarks = totalMarks * 1.5;
  // console.log(finalWeightedMarks)

  let findAttendance =
    (item.attendance.daysPresent / item.attendance.totalDays) * 100;
  // console.log(findAttendance)

  let attendanceRanker;
  if (findAttendance >= 90) {
    attendanceRanker = "Excellent";
  } else if (findAttendance >= 80) {
    attendanceRanker = "Good";
  } else {
    attendanceRanker = "Needs Improvement";
  }

  return {
    name: item.name,
    weightedMarks: finalWeightedMarks,
    attendanceRank: attendanceRanker,
  };
});

console.log(arr);
