let log = console.log;
const closeBook = document.querySelector('.exit');
const form = document.querySelector('form');
const formSubmit = document.getElementById('formSubmit');
const openButton = document.querySelector('[data-button-target]');
const closeButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');

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

//Prevent form Submit
formSubmit.addEventListener('click', (e) => {
  if (form.checkValidity()) {
    e.preventDefault();
    log(e);
  }
});

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {}

addBookToLibrary();

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
