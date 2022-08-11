import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  addOrEdit = '';
  editBook: IBook | null = null;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  get title() {
    return this.form.controls.title as FormControl;
  }

  get cover() {
    return this.form.controls.cover as FormControl;
  }

  get genre() {
    return this.form.controls.genre as FormControl;
  }

  get author() {
    return this.form.controls.author as FormControl;
  }

  get content() {
    return this.form.controls.content as FormControl;
  }

  ngOnInit(): void {
    this.getBook();
  }

  submit() {
    let book = this.form.value as IBook;
    book.reviewNumber = this.editBook?.reviewNumber as number;
    book.rating = this.editBook?.rating as number;
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.bookService.updadeBook(id, book);
    } else {
      this.bookService.createBook(book);
    }
    this.router.navigate(['']);
  }

  onCancel() {
    this.form.reset();
    this.router.navigate(['']);
  }

  getBook() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    let book = this.bookService.getBook(id).subscribe(book => {
      if (book) {
        this.addOrEdit = 'Edit';
        this.form = this.formBuilder.group({
          title: book.title,
          cover: book.cover,
          genre: book.genre,
          author: book.author,
          content: book.content
        });
        this.editBook = book;
      } else {
        this.addOrEdit = 'Add';
        this.form = this.formBuilder.group({
          title: '',
          cover: '',
          genre: '',
          author: '',
          content: ''
        });
        console.log(777);
      }
      this.form.controls['title'].setValidators([Validators.required, Validators.minLength(5)]);
      this.form.controls['cover'].setValidators([Validators.required, Validators.minLength(5)]);
      this.form.controls['genre'].setValidators([Validators.required, Validators.minLength(3)]);
      this.form.controls['author'].setValidators([Validators.required, Validators.minLength(3)]);
      this.form.controls['content'].setValidators([Validators.required, Validators.minLength(10)]);
    });
  }

}
