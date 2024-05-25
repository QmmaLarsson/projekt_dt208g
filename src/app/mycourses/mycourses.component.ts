import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MycourseService } from '../services/mycourse.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-mycourses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.scss'
})
export class MycoursesComponent {
  //Properties
  //Array som innehåller sparade kurser
  myCourses: Course[] = [];

  constructor(private myCourseservice: MycourseService) { }

  //Metod som körs när komponenten initialiseras
  ngOnInit() {
    this.loadCourses();
  }

  //Hämtar kurser sparade i localStorage
  loadCourses() {
    this.myCourses = this.myCourseservice.loadCourses();
  }

  //Tar bort en kurs från listan och sparar till localStorage
  deleteCourse(index: number): void {
    this.myCourses.splice(index, 1);
    this.myCourseservice.saveCourses(this.myCourses);
  }

  //Räkna ut antalet poäng
  calculatePoints(): number {
    return this.myCourses.reduce((total, course) => total + course.points, 0);
  }
}
