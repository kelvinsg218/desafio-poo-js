export class Book {
  constructor(title, author, borrowed = false) {
    this.title = title;
    this.author = author;
    this.borrowed = false;
  }

  lendBook() {
    if (!this.borrowed) {
      this.borrowed = true;
      return `You have borrowed "${this.title}" by ${this.author}.`;
    } else {
      return `Sorry, "${this.title}" is already borrowed.`;
    }
  }

  returnBook() {
    if (this.borrowed) {
      this.borrowed = false;
      return `You have returned "${this.title}".`;
    } else {
      return `This book was not borrowed.`;
    }
  }
}
