import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [{
    id: 1,
    name: "Twilight",
    year: 2004,
    available: true
  },
  {
    id: 2,
    name: "Game of Thrones",
    year: 1992,
    available: false
  },
  {
    id: 3,
    name: "Harry Potter",
    year: 1989,
    available: true
  }
  ]
  bookToBeUpdated = new Book();
  bookToBeUpdatedIndex:any = 0;
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  deleteRow(id: number) {
    this.books.splice(id, 1);
  }

  setBookToBeUpdated(givenBook: Book, index: number) {
    this.bookToBeUpdated = givenBook;
    this.bookToBeUpdatedIndex = index;
  }

  getBookToBeUpdated(): Book {
    // console.log(this.bookToBeUpdated);
    return this.bookToBeUpdated;
  }

  updateBook(givenBook:Book){
    this.books.splice(this.bookToBeUpdatedIndex, 1,givenBook);
  }

  addBook(newBook:Book){
    let bookSize = this.books.length;
    newBook.id = bookSize+1;
    this.books.splice(bookSize,0, newBook);
  }
}
