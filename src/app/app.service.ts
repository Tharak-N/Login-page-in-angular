import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
 
@Injectable({providedIn:'root'})
export class ApiServices {
  constructor(public http: HttpClient) {}
  getApiUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  getData (){
    return this.http.get<any>(this.getApiUrl)
  }
}