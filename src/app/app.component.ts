import { Component, Inject } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
import { SharedService } from './shared.service';
import { Task } from './Enum/Task.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  apiRoot: string = "https://localhost:44377/api/Challange";

  task: any = {};
  eTask = Task;

  title : string = 'cognizant-challange';

  constructor(private http: HttpClient, private sharedService: SharedService) {
  }
  

  doPOST() {
    this.sharedService.doPOST(this.task).subscribe((res:any) =>{});
  }
}
