import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
 
@Injectable()
export class ApiServices {
  constructor(public http: HttpClient) {}
  getApiUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  postApiUrl = 'https://tharakapi.free.beeceptor.com/login'
  covidApiUrl = 'https://api.covidtracking.com/v1/us/daily.json'
  getData (){
    return this.http.get<any>(this.getApiUrl)
  }

  postData (data) {
    return this.http.post<any>(this.postApiUrl, data)
  }
  
  covidData(){
    return this.http.get<any>(this.covidApiUrl)
  }


  covidObservable = new Observable((observer)=>{
    observer.next()
  })

}