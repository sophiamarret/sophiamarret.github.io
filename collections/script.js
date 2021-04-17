let Airtable = require("airtable");
let books = [];

let base = new Airtable({
    apiKey: "keyZoSZmqvPSck3LH"
}).base(
    "appbGC3fHUTOPA91o"
);

base("books")
    .select({view:"Grid view"})
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
    try{
    showBooks();
   } catch(e) {
    console.error(e)
   }
}

function consoleLogBooks() {
    console.log("consoleLogBooks()");
    books.forEach(book => {
        console.log("Book:", book);
    });
}


let pageElement = document.querySelector('.book-container');

function showBooks() {
    console.log("showBooks()");
    books.forEach(book => {
        let shelf = pageElement.querySelector(`.shelf-${book.fields.shelf}`)
        if(!shelf){ 
            let newshelf = document.createElement("div");
            newshelf.classList.add(`shelf-${book.fields.shelf}`);
            pageElement.append(newshelf);
            shelf = newshelf;
        }



        let bookElement = document.createElement("div");
        bookElement.classList.add(book.fields.genre.replace(/\s/g,"-"));
        bookElement.classList.add("book");
        shelf.append(bookElement);

        // let shelfNumber = document.querySelector(".shelfnumber");

        bookElement.addEventListener("click", () => {
            bookElement.classList.add("visited");
            // shelfNumber.classList.add("visited");
            let container = document.querySelector(".detail");
            container.classList.add("show");
            container.classList.add(book.fields.genre.replace(/\s/g,"-"))

            // let bookContainer = document.createElement("div");
            // bookContainer.classList.add("book-container");


            document.querySelector(".book-order").innerText = book.fields.order;
            // let orderNumber = document.createElement("p");
            // orderNumber.classList.add("book-order");
            // orderNumber.innerText = book.fields.order;
            // bookContainer.append(orderNumber);
 
            document.querySelector(".book-title").innerText = book.fields.book_title;
            // let bookTitle = document.createElement("p");
            // bookTitle.classList.add("book-title");
            // bookTitle.innerText = book.fields.book_title;
            // bookContainer.append(bookTitle);

            document.querySelector(".book-author").innerText = book.fields.author;

            document.querySelector(".book-description").innerText = book.fields.description;
            // let bookDescription = document.createElement("p");
            // bookDescription.classList.add("book-description");
            // bookDescription.innerText = book.fields.description;
            // bookContainer.append(bookDescription);

            document.querySelector(".book-genre").innerText = book.fields.genre;
            // let nameOfGenre = document.createElement("span");
            // nameOfGenre.classList.add("book-genre");
            // nameOfGenre.innerText = book.fields.genre;
            // bookContainer.append(nameOfGenre);

                function backButton(){
                container.classList.remove("show");
                container.classList.remove(book.fields.genre.replace(/\s/g,"-"));

                }

            document.querySelector(".book-genre").addEventListener('click', backButton)


            document.querySelector(".book-image").src = book.fields.cover_image[0].url;
            // let coverImage = document.createElement("img");
            // coverImage.classList.add("book-image");
            // coverImage.src = book.fields.cover_image[0].url;
            // bookContainer.append(coverImage);

            // container.append(bookContainer);
        });

    })

}

// let closeDetailButton = document.querySelector('#close-detail');

// function closeDetail() {
//   bookElement.classList.remove('show')

// }

// closeDetailButton.addEventListener('click', closeInfo);
