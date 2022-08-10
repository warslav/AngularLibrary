import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../models/Book';
import { Books } from './seed-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
  }

  getBooks(): Observable<IBook[]> {
    return of(Books);
  }

  getRecomendedBooks(): Observable<IBook[]> {
    // @ts-ignore
    return of(Books.slice().sort((a, b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0)));
  }

  getBook(id: number): Observable<IBook | undefined> {
    return of(Books.find(b => b.id == id));
  }

  createBook(book: IBook): number {
    book.id = Books.length + 1;
    Books.push(book);
    return book.id;
  }

  updadeBook(id: number, book: IBook): void {
    let editBook = Books.find(b => b.id == id);
    if (editBook) {
      let index = Books.indexOf(editBook);
      book.id = id;
      Books[index] = book;
    }
  }
}
