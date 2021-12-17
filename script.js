let myLibrary = []; //store the books
const books = document.querySelector(".books");
const addNewBook = document.querySelector('.add-new-book');
let removeBook = "";

//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ` + (this.read ? "is already read." : "not read yet.");
  }
}
//add toggle function to the Book prototype
Book.prototype.toggleStatus = function() {
  this.read = !this.read;
}

//create books
const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, false);
const book2 = new Book("Harry Potter and the Chamber of Secrets", " J.K. Rowling", 341, false);
const book3 = new Book("Harry Potter and the Prisoner of Azkaban", " J.K. Rowling", 435, false);
const book4 = new Book("Please Look After Mom", "Shin Kyung-sook", 237, false);
const book5 = new Book("Please Look After Mom", "Shin Kyung-sook", 237, false);
const book6 = new Book("Please Look After Mom", "Shin Kyung-sook", 237, false);



//add the book
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
//display the books 
displayBooks();

//add book to the library function decalration
function addBookToLibrary(book) {
  myLibrary.push(book);
}
//display the books function decalration
function displayBooks() {
  books.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookDiv = document.createElement('div');
    //building dom
    const title = document.createElement('div');
    title.textContent = book.title;
    const author = document.createElement('div');
    author.textContent = "Author: " + book.author;
    const pages = document.createElement('div');
    pages.textContent = "Pages: " + book.pages;
    const status = document.createElement('div');
    status.textContent = "Status: " + book.read;
    //add toggle status button
    const toggleStatusBtn = document.createElement('button');
    toggleStatusBtn.textContent = "Read";
    toggleStatusBtn.addEventListener('click',() => {
      update(book);
    });

    //remove book button
    removeBook = document.createElement('button');
    removeBook.textContent = "Remove Book";
    removeBook.dataset.index = i;
    removeBook.addEventListener("click",remove);
    //start appending to the bookDiv
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(status);
    bookDiv.appendChild(toggleStatusBtn);
    bookDiv.appendChild(removeBook);
    
    //adding to the dom
    bookDiv.classList.add('book');
    books.appendChild(bookDiv);
  }
}
// removeBook.addEventListener("click",remove);
function update(book) {
  book.toggleStatus();
  displayBooks();
}
function remove(e) {
  console.log(e.target.dataset.index);
  let idx = e.target.dataset.index;
  myLibrary.splice(idx, 1);
  displayBooks();
}
//for form
const form = document.querySelector('#form');
const cancel = document.querySelector('#cancel');
const submit = document.querySelector('#submit');
addNewBook.addEventListener('click', openform);

cancel.addEventListener('click', closeform);
function openform() {
  form.style.display = "block";
}
function closeform() {
  form.style.display = "none";
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const status = document.querySelector('#status').value;
  addBookToLibrary(new Book(title, author, pages, status));
  console.log(myLibrary);
  displayBooks();
  closeform();
})


