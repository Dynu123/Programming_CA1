import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() book: any;
  id!: string;
  name!: string;
  author!: string;
  subject!: string;
  issuedTo!: string;
  description!: string;

  ngOnInit(): void {
    this.id=this.book.id;
    this.name=this.book.name;
    this.author=this.book.author;
    this.subject=this.book.subject;
    this.issuedTo=this.book.issuedTo;
    this.description=this.book.description;
  }

  addBook() {
    var val = { id: this.id, name: this.name, author:this.author, subject: this.subject, issuedTo: this.issuedTo, description: this.description};
    this.service.addBook(val).subscribe(res=> {
      alert(res.toString());
    });
  }

  updateBook() {
    var val = { id: this.id, name: this.name, author:this.author, subject: this.subject, issuedTo: this.issuedTo, description: this.description};
    this.service.updateBook(val).subscribe(res=> {
      alert(res.toString());
    });
  }

}
