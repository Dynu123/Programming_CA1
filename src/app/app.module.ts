import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ShowDelBookComponent } from './book/show-del-book/show-del-book.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';
import { SubjectComponent } from './subject/subject.component';
import { ShowDelSubComponent } from './subject/show-del-sub/show-del-sub.component';
import { AddEditSubComponent } from './subject/add-edit-sub/add-edit-sub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ShowDelBookComponent,
    AddEditBookComponent,
    SubjectComponent,
    ShowDelSubComponent,
    AddEditSubComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
