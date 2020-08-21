import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Course } from './course';
import {Observable, of} from "rxjs";
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private scheduleUrl = "https://cors-anywhere.herokuapp.com/https://one.ufl.edu/apix/soc/schedule/"
  private tempUrl = "assets/download.json";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'X-Requested-With' : 'JSONHttpRequest'}),
    params: new HttpParams()
  };

  constructor(private http: HttpClient) { }

  /*setParams(classNum: string, term: string)
  {

    let date: Date = new Date();
    let yearParam = date.getFullYear()%100;
    let termParam:string;
    switch(term)
    {
      case "Summer": termParam = "2" + yearParam.toString() + "5";break;
      case "Fall": termParam = "2" + yearParam.toString() + "8";break;
      case "Spring": termParam = "2" + yearParam.toString() + "1";break;
    }
    this.httpOptions.params = new HttpParams();
    console.log(termParam);

    this.httpOptions.params = this.httpOptions.params.append('term', termParam);
    this.httpOptions.params = this.httpOptions.params.append('category','CWSP');

    console.log(this.httpOptions);
  }
  getCourses(): Observable<Course[]> {
    console.log(this.httpOptions);
    let temp = this.http.get<Course[]>(this.scheduleUrl, this.httpOptions).pipe();
    console.log(temp);
    this.http.get<any>(this.scheduleUrl, this.httpOptions).subscribe(data => console.log(data.total));
    return temp;

  }*/
  getCourses() {
    return this.http.get<any>(this.tempUrl);
  }
}
