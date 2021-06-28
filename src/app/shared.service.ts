import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SubmitTask } from './Model/submit-task';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { 
  }


  doPOST(task: SubmitTask[]) {
    return this.http.post('https://localhost:44377/api/Challange/submitTask',task).
    pipe(
      map((data:any)=> {
        return data;
      }), catchError(error => 
        { return throwError('Something went wrong');
      })
    )
  }
}
