// create a book object and print its custom reading status message using its title, author, and isRead boolean properties
let book= {
    title:"India Superpower",
    author:"John Doe",
    isRead:true
}
console.log(`The book ${book.title} by ${book.author} has ${book.isRead ? "been read" : "not been read yet"}.`);