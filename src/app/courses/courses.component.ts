import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  //Properties
  courselist: Course[] = [];
  //Array som lagrar de kurser som finns kvar efter filtreringen
  filteredCourse: Course[] = [];
  filterValue: string = "";
  sortBy: string = "";

  constructor(private courseservice: CourseService) { }

  //Metod som körs när komponenten initialiseras
  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courselist = data;
      this.filteredCourse = data;
    });
  }
}