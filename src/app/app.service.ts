import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
 
@Injectable({providedIn:'root'})
export class ConfigService {
  constructor(public http: HttpClient) {}
  getData (){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1/comments')
  }
}