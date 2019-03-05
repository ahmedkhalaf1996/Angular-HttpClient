import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'https://angular-httpclient-79672.firebaseio.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable()

export class ServerService {

  constructor(private http: HttpClient ) {}


 storeServers (servers): Observable<any> {
    console.log(servers);
    return this.http.put<any>(endpoint + 'data.json', servers, httpOptions);
    
  }


  getServers(): Observable<any> {

  return this.http.get<any>(endpoint + 'data.json',httpOptions).pipe(
    map((response) => {
     const data = response;
     return data;
   })
  )
}




  getAppName() {
    return this.http.get('https://angular-httpclient-79672.firebaseio.com/appName.json');
  }
}
