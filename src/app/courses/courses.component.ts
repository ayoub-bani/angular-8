import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  myCourse = "Laravel";
  courses = ['Laravel', 'TailwindCSS', 'Ui Kit']

  constructor() { }

  ngOnInit() {
  }
  addCourse() {
    this.courses.push(this.myCourse);
    this.myCourse = "";
  }
}
