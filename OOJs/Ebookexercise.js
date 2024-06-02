class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }

  download() {
    return `The title of Ebook is: ${this.title} and its fiesize is: ${this.fileSize}`;
  }
}

const b = new Ebook("Helen Keller", "Helen", 2002, 12);
console.log(b.download());
