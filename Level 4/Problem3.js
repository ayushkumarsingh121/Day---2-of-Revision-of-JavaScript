// Question 3: Calculate Bonus Marks and Attendance-Based Promotion
// Task: Given an array of student objects where each student has a name, marks (array of scores), and attendance (object with days present, total days, and a field showing if the student has medical leaves), use map() to create a new array of student objects where each student has the name, final marks (sum of marks plus 5 bonus points for each mark above 80), and a "promotionStatus" (based on attendance percentage, where above 85% with no medical leaves gets promoted).

// const students = [
//   {
//     name: "John",
//     marks: [85, 90, 78],
//     attendance: { daysPresent: 18, totalDays: 20, hasMedicalLeaves: false },
//   },
//   {
//     name: "Alice",
//     marks: [88, 76, 92],
//     attendance: { daysPresent: 16, totalDays: 20, hasMedicalLeaves: true },
//   },
// ];



const students = [
  {
    name: "John",
    marks: [85, 90, 78],
    attendance: { daysPresent: 18, totalDays: 20, hasMedicalLeaves: false },
  },
  {
    name: "Alice",
    marks: [88, 76, 92],
    attendance: { daysPresent: 16, totalDays: 20, hasMedicalLeaves: true },
  },
];

let arr = students.map((item) => {

  let sumOfMarks = 0
  let bonusPoints = 0
  for (let i = 0; i < item.marks.length; i++) {
    sumOfMarks = sumOfMarks + item.marks[i]
    if(item.marks[i] > 80){
      bonusPoints = bonusPoints + 5
    }
  }
  // console.log(sumOfMarks)

  let AttendancePercentage = (item.attendance.daysPresent / item.attendance.totalDays) * 100
  // console.log(AttendancePercentage)

  let medical = item.attendance.hasMedicalLeaves
  // console.log(medical)


  return {
    name: item.name,
    finalMarks: sumOfMarks + bonusPoints,
    promotionStatus: AttendancePercentage >= 85 && !medical ? "Promoted" : "Not Promoted"
  }
})
console.log(arr)