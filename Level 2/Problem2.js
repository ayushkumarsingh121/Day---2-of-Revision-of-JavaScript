// 2. Updating Object Property Values:
// Given an array of objects representing books, each with a title and pages:
// let books = [
//   { title: 'Book A', pages: 200 },
//   { title: 'Book B', pages: 150 },
//   { title: 'Book C', pages: 300 }
// ];
// Use the map function to increase the pages of each book by 50. What will be the resulting array?

let books = [
  { title: 'Book A', pages: 200 },
  { title: 'Book B', pages: 150 },
  { title: 'Book C', pages: 300 }
];

let arr = books.map((item)=>{
  return{
    title : item.title,
    pages : item.pages + 50
  }
})

console.log(arr)