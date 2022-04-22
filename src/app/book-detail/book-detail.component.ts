import { BookComponent } from './../book/book.component';
import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any;
  bookId:any;

  constructor(private activatedRoute: ActivatedRoute, private service: SharedService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.bookId = param.get('id');
      this.service.getBookDetail(this.bookId).subscribe(data => {
        this.book = JSON.parse(JSON.stringify(data));
      });
    });
  }
}
