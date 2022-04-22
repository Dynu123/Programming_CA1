import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book/book.component';
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [
  { path: "books", component: BookComponent },
  { path: "books/book/:id", component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
