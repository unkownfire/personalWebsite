import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import { SchedulerService } from './scheduler.service';
import {Course} from './course';
import { Observable, of } from "rxjs";
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})



export class SchedulerComponent implements OnInit {
  semester: string;
  classNum: string;
  test: number;
  now: Date = new Date();
  courses: Array<Course> = new Array<Course>();

  constructor(private schedulerService: SchedulerService) { }

  ngOnInit(): void {
  }

  getCourses(): void {
    //this.schedulerService.setParams(this.classNum, this.semester);

    //this.schedulerService.getCourses().subscribe(courses => this.courses = courses);
    this.schedulerService.getCourses().subscribe((data) => {
      console.log(data[0].COURSES[0]);
      const coursesObs = of(data[0].COURSES);
      console.log("hello");
      data[0].COURSES.forEach(element => {
        this.courses.push({
          "code":element.code,
          "courseId":element.courseId,
          "name":element.name,
          "termInd":element.termInd,
          "description":element.description,
          "prerequisites":element.prerequisites,
          "sections":element.sections
        });
      });

    });


  }
}
