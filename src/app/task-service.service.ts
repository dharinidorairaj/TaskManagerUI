import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  apiUrl = "/api";
  constructor(private http: HttpClient) { }
  private baseUrl = '//localhost:9000/allTasks';
  // constructor() { }

  // addTask (task: Task): Observable<void> {
  //   var addUrl = this.baseUrl + "/add";
  //   return this.http.post<any>(addUrl, task, httpOptions).pipe(
  //     tap(() => this.log(`added task`)),
  //     catchError(this.handleError<Task>('addHero'))
  //   );
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getTask(): Observable<any> {
    return this.http.get(this.baseUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

 /* getBook(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }*/

  getTaskById(id:string): Observable<any> {
    // const url = `{baseUrl}/${id}`;
    return this.http.get(this.baseUrl + "/" + id,this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
    
  }
  
  addTask(data): Observable<any> {
    console.log("data1",data);
    var addUrl = this.baseUrl;
    console.log(addUrl)
      return this.http.post(addUrl, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    
  }
  /*
  postBook(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  } */

  updateTask(task): Observable<any> {
    // var updateUrl = this.baseUrl + "/{" +task.taskId + "}";
    return this.http.put(this.baseUrl + "/" +task.taskId, task, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /*
  updateBook(data): Observable<any> {
    return this.http.put(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  } */
  
  endTask(id: string): Observable<{}> {
    
    return this.http.delete(this.baseUrl + "/" + id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    }
}
