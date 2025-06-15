import { User } from './user.js';
export class Library{
  constructor(name,books=[],User=[]){
  this.name = name;
  this.books = books;
  this.User = User;
  }
    addBook(book) {
        this.books.push(book);
        return `Book "${book.title}" added to the library.`;
    }
    registerUser(){
        if (this.User.length < 100) {
            const Users = new User(`User${this.User.length + 1}`, Math.floor(Math.random() * 50) + 20);
            this.User.push(Users);
            return `User ${User.name} registered successfully.`;
        } else {
            return `Library user limit reached. Cannot register more users.`;
        }
    }
    showAvailableBooks(){
        const availableBooks = this.books.filter(book => !book.borrowed);
        if (availableBooks.length > 0) {
            return availableBooks.map(book => `"${book.title}" by ${book.author}`).join(', ');
        } else {
            return 'No books are currently available.';
        }
    }
}

