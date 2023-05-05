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

Book.prototype.changeReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary() {
  const newBook = new Book(
    document.querySelector("input[name='bookTitle']").value,
    document.querySelector("input[name='author']").value,
    document.querySelector("input[name='pages']").value,
    read
    // document.querySelector("input[name='read']").value
  );

  myLibrary.push(newBook);
  form.reset();
  const book = document.createElement('div');

  myLibrary.forEach((value) => {
    libraryWrapper.appendChild(book);
    book.classList.add('book');
    book.innerHTML =
      '<h3>' +
      value.title +
      '</h3> <p> Author: ' +
      value.author +
      '</p>  <p> Pages: ' +
      value.pages +
      '</p> <button class="readingStatus">Status</button>';
  });
}

newBook.changeReadStatus();

function readStatus() {
  const read = document.querySelector('.readingStatus');
  if (read.innerHTML === 'Read') {
    read.innerHTML = 'Not Read';
  } else {
    read.innerHTML = 'Read';
  }
}

// function isChecked() {
//   if (document.getElementById('read').checked) {
//   }
// }

/* <label class="switch"> <input type="checkbox"> <span class="slider round"></span></label>' */
