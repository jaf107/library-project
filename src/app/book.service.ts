import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] =[ {
    id:1,
    name: "Twilight",
    year: 2004,
    available: true
  }, 
  {
    id:2,
    name: "Twilight",
    year: 2004,
    available: true  
  }, 
  {
    id:3,
    name: "Twilight",
    year: 2006,
    available: true   
  }
]
  constructor() { }

  getBooks(): Book[]{
    return this.books;
  }
}
