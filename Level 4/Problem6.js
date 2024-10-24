// ### Question 2: **Weighted Scores, Attendance Adjustments, and Final Graduation Eligibility**

// **Task**: Given an array of student objects where each student has a name, marks (array of scores with weights for each subject), and attendance (object with days present, total days, and a boolean showing if the student took remedial classes), create a new array of student objects using `map()` that includes:

// - The student's name
// - Weighted score, calculated by multiplying each score by its weight (scores are objects with `subject`, `score`, and `weight`)
// - Adjusted attendance percentage: If the student took remedial classes, they get a 5% attendance boost, but the total cannot exceed 100%.
// - Graduation status, where:
//     - If the weighted score is above 270 and attendance (with adjustments) is above 85%, the student is marked as "Graduated."
//     - If attendance is below 85% after adjustment, they are marked as "Not Graduated."
//     - If they pass in marks but attendance is too low, they are marked as "Special Consideration."



const students = [
  {
    name: "John",
    marks: [
      { subject: "Math", score: 85, weight: 1.5 },
      { subject: "Science", score: 90, weight: 1.2 },
      { subject: "English", score: 78, weight: 1.0 }
    ],
    attendance: { daysPresent: 16, totalDays: 20, tookRemedialClasses: true },
  },
  {
    name: "Alice",
    marks: [
      { subject: "Math", score: 88, weight: 1.5 },
      { subject: "Science", score: 76, weight: 1.2 },
      { subject: "English", score: 92, weight: 1.0 }
    ],
    attendance: { daysPresent: 15, totalDays: 20, tookRemedialClasses: false },
  },
];

const result = students.map((student) => {
  // Step 3: Calculate weighted score
  let weightedScore = 0;
  student.marks.forEach((mark) => {
    weightedScore += mark.score * mark.weight;
  });

  // Step 4: Calculate adjusted attendance
  let attendancePercentage = (student.attendance.daysPresent / student.attendance.totalDays) * 100;
  if (student.attendance.tookRemedialClasses) {
    attendancePercentage += 5; // Apply 5% boost
  }
  attendancePercentage = Math.min(attendancePercentage, 100); // Ensure it does not exceed 100%

  // Step 5: Determine graduation status
  let graduationStatus = "Not Graduated"; // Default status
  if (weightedScore > 270 && attendancePercentage > 85) {
    graduationStatus = "Graduated";
  } else if (weightedScore > 270) {
    graduationStatus = "Special Consideration";
  }

  // Step 6: Return the new student object
  return {
    name: student.name,
    weightedScore: Math.round(weightedScore), // Round the weighted score
    adjustedAttendance: Math.round(attendancePercentage), // Round the attendance percentage
    graduationStatus: graduationStatus
  };
});

console.log(result);
