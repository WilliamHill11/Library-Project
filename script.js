const firstBook = document.querySelector('.one');

let log = console.log;

// log(books);

let myLibrary = [
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

function Book() {
  // the constructor...
}

// function bookOne() {
//   log(myLibrary[0]);
// }

// bookOne();

function addBookToLibrary() {
  myLibrary.forEach((book) => {
    const bookTitle = document.createTextNode(book.book);
    firstBook.appendChild(bookTitle);
    log(book);
  });
}

addBookToLibrary();
