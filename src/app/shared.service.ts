import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiUrl = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getBookList(): Observable<any[]> {
    console.log(`${this.apiUrl}/books`) ;
    return this.http.get<any>(this.apiUrl+'/books');
  }

  getBookDetail(val: any){
    return this.http.get(this.apiUrl+'/books/'+val);
  }

  addBook(val: any): Observable<any>{
    return this.http.post(this.apiUrl+'/books', val);
  }

  updateBook(val: any){
    return this.http.put(this.apiUrl+'/books', val);
  }

  deleteBook(val: any){
    return this.http.delete(this.apiUrl+'/books/'+val);
  }

  //subjects
  getSubjectList(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl+'/subjects');
  }

  addSubject(val: any){
    return this.http.post(this.apiUrl+'/subjects', val);
  }

  updateSubject(val: any){
    return this.http.put(this.apiUrl+'/subjects', val);
  }

  deleteSubject(val: any){
    return this.http.delete(this.apiUrl+'/subjects/', val);
  }
}
