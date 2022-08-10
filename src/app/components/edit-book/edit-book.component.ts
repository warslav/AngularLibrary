import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  form: FormGroup;
  AddOrEdit = '';

  constructor() {
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
    this.form = new FormGroup({
      title: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      cover: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      genre: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      author: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      content: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  submit() {

  }

  onCancel() {

  }
}
