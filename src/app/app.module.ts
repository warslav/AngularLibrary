import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    EditBookComponent,
    BookListComponent,
    BookListItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
