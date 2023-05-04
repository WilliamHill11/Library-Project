let log = console.log;
const closeBook = document.querySelector('.exit');
const form = document.querySelector('form');
const formSubmit = document.getElementById('formSubmit');
const openButton = document.querySelector('[data-button-target]');
const closeButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const libraryWrapper = document.querySelector('.library');

openButton.addEventListener('click', () => {
  const modal = document.querySelector(openButton.dataset.buttonTarget);
  openModal(modal);
});

closeButton.addEventListener('click', () => {
  const modal = closeButton.closest('form');
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

closeBook.addEventListener('click', () => {
  form.style.display = 'none';
});

function bookForm() {
  form.style.display = 'block';
}
// e.stopImmediatePropagation();
//Prevent form Submit
formSubmit.addEventListener('click', (e) => {
  if (form.checkValidity()) {
    e.preventDefault();
    const modal = closeButton.closest('form');
    closeModal(modal);
    form.style.display = 'none';
    addBookToLibrary();
  }
});

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book(
    document.querySelector("input[name='bookTitle']").value,
    document.querySelector("input[name='author']").value,
    document.querySelector("input[name='pages']").value,
    document.querySelector("input[name='read']").value
  );
  myLibrary.push(newBook);
  form.reset();
  Object.values(myLibrary).forEach((value) => {
    const book = document.createElement('div');
    libraryWrapper.appendChild(book);
    book.classList.add('book', 'newBookTitle', 'newBookContent');
    book.innerHTML = value.title;
    console.log(value.title);
    console.log(value.author);
    console.log(value.pages);
    console.log(value.read);
  });
}

// const book1 = {
//   book: 'Rich Dad Poor Dad',
//   author: 'Robert Kiyosaki',
//   pages: '300',
//   read: 'read',
// };

// const book2 = {
//   book: 'The Slight Edge',
//   author: 'Jeff Olson',
//   pages: '230',
//   read: 'read',
// };
