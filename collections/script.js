// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyZoSZmqvPSck3LH" }).base(
  "appbGC3fHUTOPA91o"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("books")
  .select({})
  .eachPage(gotPageOfBooks, gotAllBooks);

// an empty array to hold our data
var books = [];

// callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  // add the records from this page to our array
  books.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllBooks(err) {
  console.log("gotAllBooks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogBooks();
  showBooks();
}

// just loop through the books and console.log them
function consoleLogBooks() {
  console.log("consoleLogBooks()");
  books.forEach(book => {
    console.log("Book:", book);
  });
}

// look through our airtable data, create elements
function showBooks() {
  console.log("showBooks()");
  books.forEach(book => {
    // create container for each book
    var bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    document.querySelector(".container").append(bookContainer);

    // add book titles
    var bookTitle = document.createElement("h1");
    bookTitle.classList.add("book-title");
    bookTitle.innerText = book.fields.book_title;
    bookContainer.append(bookTitle);

    var nameOfGenre = document.createElement("h1");
    nameOfGenre.classList.add("book-genre");
    nameOfGenre.innerText = book.fields.genre;
    bookContainer.append(nameOfGenre);

    var bookDescription = document.createElement("p");
    bookDescription.classList.add("book-description");
    bookDescription.innerText = book.fields.description;
    bookContainer.append(bookDescription);

    var bookImage = document.createElement("img");
    bookImage.classList.add("book-image");
    bookImage.src = book.fields.book_image[0].url;
    bookContainer.append(bookImage);

  bookContainer.addEventListener("click", function() {
      bookDescription.classList.toggle("active");
      bookImage.classList.toggle("active");
    });
   });
}
