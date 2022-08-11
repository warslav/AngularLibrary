import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../../models/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  allBooks: Observable<IBook[]> | null = null;
  recomendedBooks: Observable<IBook[]> | null = null;

  constructor(
    private bookService: BookService
  ) {
  }

  getAllBooks() {
    this.allBooks = this.bookService.getBooks();
  }

  getRecomendedBooks() {
    this.recomendedBooks = this.bookService.getRecomendedBooks();
  }

  ngOnInit(): void {
    this.getAllBooks();
    this.getRecomendedBooks();
  }

}
