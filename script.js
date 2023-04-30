const firstBook = document.querySelector('.one');

let log = console.log;

log(firstBook);

let startingLibrary = [
  {
    book: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    pages: '300',
    read: 'read',
  },
  {
    book: 'The Slight Edge',
    author: 'Jeff Olson',
    pages: '230',
    read: 'read',
  },
];

let myLibrary = [];

function Book() {
  // the constructor...
}

function startingBooks() {
  Object.entries(startingLibrary).forEach(([key, value]) => {
    console.log(key, value);
  });
}

// function addBookToLibrary() {
//   const keys = Object.keys(myLibrary);
//   keys.forEach((key) => {
//     console.log(myLibrary[key]);
//     const bookInfo = document.createTextNode(myLibrary[key]);
//     firstBook.appendChild(bookInfo);
//   });
// }

// function addBookToLibrary() {
//   myLibrary.forEach((bookDetails) => {

//     const bookInfo = document.createTextNode(bookDetails.book);
//     firstBook.appendChild(bookInfo);
//     // log(bookDetails);
//   });
// }

// addBookToLibrary();

startingBooks();
