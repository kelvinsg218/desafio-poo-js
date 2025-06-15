
export class User{
  constructor(name,age,barrowedBooks=[]){
  this.name = name;
  this.age = age;
  this.barrowedBooks = barrowedBooks;
  }

  pickupbook(){
    if (this.barrowedBooks.length < 5) {
      return `You can borrow more books. You currently have ${this.barrowedBooks.length} books.`;
    } else {
      return `You cannot borrow more than 5 books at a time. Please return some books first.`;
    }
  }
    returnbook(){
        if (this.barrowedBooks.length > 0) {
        this.barrowedBooks.pop();
        return `You have returned a book. You now have ${this.barrowedBooks.length} books.`;
        } else {
        return `You have no books to return.`;
        }
    }
}
