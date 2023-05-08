const closeForm = document.querySelector('.exit');
const form = document.querySelector('form');
const formSubmit = document.getElementById('formSubmit');
const openButton = document.querySelector('[data-button-target]');
const closeButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const libraryWrapper = document.querySelector('.library');

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  myLibrary.push(
    new Book(title.value, author.value, pages.value, read.checked)
  );
  form.reset();
  render();
}

function render() {
  const libraryDisplay = document.querySelector('.library');
  libraryDisplay.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

function createBook(item) {
  const libraryWrapper = document.querySelector('.library');
  const book = document.createElement('div');
  const deleteBook = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readStatus = document.createElement('button');

  libraryWrapper.append(book);
  book.classList.add('book');

  deleteBook.innerHTML = '&#10006';
  deleteBook.classList.add('deleteBtn');
  book.append(deleteBook);

  deleteBook.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    render();
  });

  title.textContent = item.title;
  title.classList.add('titleBook');
  book.append(title);

  author.textContent = `Author: ${item.author}`;
  book.append(author);

  pages.textContent = `Pages: ${item.pages}`;
  book.append(pages);

  readStatus.textContent = item.read;
  readStatus.classList.add('readBtn');
  book.append(readStatus);
  if (item.read === false) {
    readStatus.textContent = 'Not Read';
    readStatus.style.backgroundColor = 'red';
  } else {
    readStatus.textContent = 'Read';
    readStatus.style.backgroundColor = '#63da63';
  }

  readStatus.addEventListener('click', () => {
    item.read = !item.read;
    render();
  });
}

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

closeForm.addEventListener('click', () => {
  form.style.display = 'none';
});

function bookForm() {
  form.style.display = 'block';
}

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
