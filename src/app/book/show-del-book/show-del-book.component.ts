import { BookComponent } from './../book.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-book',
  templateUrl: './show-del-book.component.html',
  styleUrls: ['./show-del-book.component.css']
})
export class ShowDelBookComponent implements OnInit {

  
  constructor(private service: SharedService) { }

  booksList: any = [];
  ModalTitle!: string;
  ActivateAddEditBookComponent: boolean =false;
  book: any;

  bookIdFilter: string = "";
  bookNameFilter: string = "";
  bookAuthorFilter: string = "";
  bookSubjectFilter: string = "";
  bookIssuedToFilter: string = "";
  bookListWithoutFilter: any = [];


  ngOnInit(): void {
    this.refreshBookList();
  }

  addClick() {
    this.book = { id: 0, name: ""}
    this.ModalTitle="Add book";
    this.ActivateAddEditBookComponent=true;
  }

  editClick(item: any) {
  this.book = item;
  this.ModalTitle = "Edit book"
  this.ActivateAddEditBookComponent = true
  }

  deleteClick(item: any) {
    if(confirm('Are you sure to delete?')) {
      this.service.deleteBook(item.id).subscribe(data=> {
        console.log(data)
        this.refreshBookList();
        alert(data.toString());
      })
    }
  }

  closeClick() {
    this.ActivateAddEditBookComponent = false;
    this.refreshBookList();
  }

  refreshBookList() {
    this.service.getBookList().subscribe(data => {
      this.booksList = data;
      this.bookListWithoutFilter=data;
    });
  }

  filterBooks(){
    var bookIdFilter = this.bookIdFilter;
    var bookNameFilter = this.bookNameFilter;

    this.booksList = this.bookListWithoutFilter.filter((el: any) => el.id.toString().toLowerCase().includes(
        bookIdFilter.toString().trim().toLowerCase()
      ) &&
        el.name.toString().toLowerCase().includes(
          bookNameFilter.toString().trim().toLowerCase()
        )&&
        el.issuedTo.toString().toLowerCase().includes(
          this.bookIssuedToFilter.toString().trim().toLowerCase()
        )&&
        el.subject.toString().toLowerCase().includes(
          this.bookSubjectFilter.toString().trim().toLowerCase()
        )&&
        el.author.toString().toLowerCase().includes(
          this.bookAuthorFilter.toString().trim().toLowerCase()
        ));
  }

  sortResult(prop:any, asc: boolean){
    this.booksList = this.bookListWithoutFilter.sort(function(a:any, b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
