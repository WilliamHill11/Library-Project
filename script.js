const firstBookTitle = document.querySelector('.titleOne');

let log = console.log;

const book1 = {
  book: 'Rich Dad Poor Dad',
  author: 'Robert Kiyosaki',
  pages: '300',
  read: 'read',
};

const book2 = {
  book: 'The Slight Edge',
  author: 'Jeff Olson',
  pages: '230',
  read: 'read',
};

let myLibrary = [];

function Book() {
  // the constructor...
}

function startingBooks() {
  const title = book1.book;
  const ok = document.createTextNode(book1.author);
  firstBookTitle.appendChild(ok);
  const author = book1.author;
  const pages = book1.pages;
  let read = book1.read;

  log(title);
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
