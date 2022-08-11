import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './components/books-page/books-page.component';

const routes: Routes = [
  {path: '', component: BooksPageComponent},
  {path: ':id', component: BooksPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
