import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})



export class SchedulerComponent implements OnInit {
  semester: string;
  classNum: string;
  test: string;
  constructor() { }

  ngOnInit(): void {
  }
  getConfig() {
    let dateParam = 0;
    switch(this.semester)
    {
      case 'Fall': dateParam = 1;
      case 'Summer': dateParam = 8;
      case 'Spring': dateParam = 3;
    }
    let semParam = '2' + dateParam + '20';
    let params = new HttpParams();
    params = params.append('Term',semParam);
    params = params.append('Category', 'CWSP');

    return "";
    //this.Http.get("https://one.ufl.edu/apix/soc/schedule/Term=2520&Category=CWSP");

  }
}
