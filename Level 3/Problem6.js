// Question: Given an array of event objects, where each event contains title, attendees (array of objects with name and age), use map() to create a new array of event objects where each event contains the title and a list of the names of attendees who are above 18 years old.

// const events = [
//   { title: 'Concert', attendees: [{ name: 'John', age: 20 }, { name: 'Alice', age: 17 }] },
//   { title: 'Seminar', attendees: [{ name: 'Bob', age: 19 }, { name: 'Charlie', age: 16 }] }
// ];
// Expected output: [
//   { title: 'Concert', adultAttendees: ['John'] },
//   { title: 'Seminar', adultAttendees: ['Bob'] }
// ]


const events = [
  { title: 'Concert', attendees: [{ name: 'John', age: 20 }, { name: 'Alice', age: 17 }] },
  { title: 'Seminar', attendees: [{ name: 'Bob', age: 19 }, { name: 'Charlie', age: 16 }] }
];

let arr = events.map((item) => {
  let InnerArr = []
  let people = item.attendees
  for (let i = 0; i < people.length; i++) {
    if(people[i].age > 18){
      InnerArr.push(people[i].name)
    }
  }
  return {
    title: item.title,
    adultAttendees: InnerArr
  }
})

console.log(arr)