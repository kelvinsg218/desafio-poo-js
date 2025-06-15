import { Book } from '../main/classes/livro.js';
import { Library } from '../main/classes/library.js';
import { User } from '../main/classes/user.js';


const Book1 = new Book('1984', 'George Orwell');
const Book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
const Book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const Book4 = new Book('harry potter', 'J.K. Rowling');
const Book5 = new Book('The Catcher in the Rye', 'J.D. Salinger');
const Book6 = new Book('The Hobbit', 'J.R.R. Tolkien');

const User1 = new User();
const User2 = new User();
const User3 = new User();

const biblioteca = new Library('City Library');
biblioteca.addBook(Book1);
biblioteca.addBook(Book2);
biblioteca.addBook(Book3);
biblioteca.addBook(Book4);
biblioteca.addBook(Book5);
biblioteca.addBook(Book6);

biblioteca.registerUser(User1);
biblioteca.registerUser(User2);
biblioteca.registerUser(User3);

User1.barrowedBooks.push(Book1, Book2,Book3, Book4,);
User2.barrowedBooks.push(Book2);
User3.barrowedBooks.push(Book3);

console.log("informaçoes da biblioteca : ",biblioteca);
console.log("---------------------------------------------------------")

console.log("Available books in the library: ", biblioteca.showAvailableBooks());
console.log("---------------------------------------------------------")
console.log("user 1: ",User1.pickupbook());
console.log("user 2 : ",User2.pickupbook());
console.log("user 3 : ",User3.pickupbook());
console.log("---------------------------------------------------------")
console.log("user 1 : ",User1.returnbook());