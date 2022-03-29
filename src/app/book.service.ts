import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] =[ {
    id:1,
    name: "Twilight",
    year: 2004,
    available: true
  }, 
  {
    id:2,
    name: "Game of Thrones",
    year: 1992,
    available: false  
  }, 
  {
    id:3,
    name: "Harry Potter",
    year: 1989,
    available: true   
  }
]
  bookToBeUpdated = new Book();

  constructor() { }

  getBooks(): Book[]{
    return this.books;
  }

  deleteRow(id:number){
    this.books.splice(id,1);
  }

  updateBook(book:Book){
    console.log(book);
  }

  setBookToBeUpdated(givenBook:Book){
    this.bookToBeUpdated = givenBook;
  }

  getBookToBeUpdated(): Book{
    // console.log(this.bookToBeUpdated);
    return this.bookToBeUpdated;
  }
}
