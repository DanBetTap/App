import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions= {
    headers : new HttpHeaders({
      'content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  }

  // La base del URL que consumira
  apiURL = 'https://jsonplaceholder.typicode.com';

  // Declarando la variable http del tipo HttpClient
  constructor(private http:HttpClient) { }

  // Declarando un get
  getPost():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
  }

  // Creando objeto mediante POST
  createPost():Observable<any>{
    return this.http.post(this.apiURL+'/posts',this.httpOptions).pipe(retry(3));
  }

  // Borrar objetos mediante delete
  deletePost():Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+this.httpOptions);
  }
}
