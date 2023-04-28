const books = document.querySelectorAll('.book');
console.log(books);

let log = console.log;

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

function addBookToLibrary() {
  myLibrary.forEach((book) => {
    books[0].textContent = book;
    books[1].innerText = book;
    log(books[0].id);
    // console.log(books, 'books');
    // console.log(book, 'book');
  });
}

addBookToLibrary();
