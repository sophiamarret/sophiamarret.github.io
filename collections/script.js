let Airtable = require("airtable");
let books = [];

let base = new Airtable({
    apiKey: "keyZoSZmqvPSck3LH"
}).base(
    "appbGC3fHUTOPA91o"
);

base("books")
    .select({})
    .eachPage(gotPageOfBooks, gotAllBooks);

function gotPageOfBooks(records, fetchNextPage) {
    console.log("gotPageOfBooks()");

    books.push(...records);

    fetchNextPage();
}

function gotAllBooks(err) {
    console.log("gotAllBooks()");
    if (err) {
        console.log("error loading data");
        console.error(err);
        return;
    }

    consoleLogBooks();
    showBooks();
}

function consoleLogBooks() {
    console.log("consoleLogBooks()");
    books.forEach(book => {
        console.log("Book:", book);
    });
}

// let pageElement = document.querySelector('.book-container');
// let infoElement = document.querySelector('#info');
// let infoDetails = document.querySelector('#details');

// function showInfo(event) {
//   console.log("hello")
//   if(event.target.classList.contains('row1')) {
//    infoDetails.innerHTML = `
//     <h1>${event.target.dataset.book_title}</h1>
//     <p>${event.target.dataset.genre}</p>
//    `;

//     infoElement.classList.add('show');
//   }
// }

// pageElement.addEventListener('click', showInfo);


function showBooks() {
    console.log("showBooks()");
    books.forEach(book => {

        let bookCircles = document.createElement("div");
        bookCircles.classList.add("row1");
        document.querySelector(".row1").append(bookCircles)

        bookCircles.addEventListener("click", () => {
            const container = document.querySelector(".container");

            while (container.childNodes.length > 0) {
                container.removeChild(container.firstChild);
            }
            const bookContainer = document.createElement("div");
            bookContainer.classList.add("book-container");
            const bookTitle = document.createElement("h2");
            bookTitle.classList.add("book-title");
            bookTitle.append(book.fields.book_title);
            const nameOfGenre = document.createElement("span");
            nameOfGenre.classList.add("book-genre");
            nameOfGenre.append(book.fields.genre);
            bookContainer.append(bookTitle, nameOfGenre);
            container.append(bookContainer);
        });

    })

}
//   let bookContainer = document.createElement("div");
//   bookContainer.classList.add("book-container");
//   document.querySelector(".container").append(bookContainer);

//   let bookTitle = document.createElement("h1");
//   bookTitle.classList.add("book-title");
//   bookTitle.innerText = book.fields.book_title;
//   bookContainer.append(bookTitle);

//   let nameOfGenre = document.createElement("h1");
//   nameOfGenre.classList.add("book-genre");
//   nameOfGenre.innerText = book.fields.genre;
//   bookContainer.append(nameOfGenre);

// })


//   var bookAuthor = document.createElement("h2");
//   bookAuthor.classList.add("book-author");
//   bookAuthor.innerText = book.fields.author;
//   bookContainer.append(bookAuthor);

//   var bookDescription = document.createElement("p");
//   bookDescription.classList.add("book-description");
//   bookDescription.innerText = book.fields.description;
//   bookContainer.append(bookDescription);

//   var bookOrder = document.createElement("p");
//   bookOrder.classList.add("book-order");
//   bookOrder.innerText = book.fields.order;
//   bookContainer.append(bookOrder);

//   var bookImage = document.createElement("img");
//   bookImage.classList.add("book-image");
//   bookImage.src = book.fields.book_image[0].url;
//   bookContainer.append(bookImage);

// bookContainer.addEventListener("click", function() {
//     bookDescription.classList.toggle("active");
//     bookImage.classList.toggle("active");
//     bookAuthor.classList.toggle("active");
//   });
//  });