import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private scheduleUrl = "https://one.ufl.edu/apix/soc/schedule"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  setParams(classNum: string, term: string)
  {
    termParam = "2020";
    switch(term)
    {
      case "Summer": termParam = "25" + termParam.substr(2) ;break;
      case "Fall": termParam = "28" + termParam.substr(2);break;
      case "Spring": termParam = "21" + termParam.substr(2);break;
    }
    httpOption.params = new HttpParam({'Term': termParam, 'Category' : 'CWSP', 'course-code': classNum});
  }
  
}
