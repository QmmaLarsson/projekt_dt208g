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
  //Array som innehåller alla kurser
  courselist: Course[] = [];
  //Array som lagrar filtrerade kurser
  filteredCourse: Course[] = [];
  //Värdet från input-fältet för att filtrera kurser
  filterValue: string = "";
  //Värdet från klick på en rubrik för sortering
  sortBy: string = "";
  //Array som innehåller alla unika ämnen för kurserna
  uniqueSubjects: string[] = [];
  //Värdet från valt ämne för filtrering
  selectedSubject: string = "";

  constructor(private courseservice: CourseService) { }

  //Metod som körs när komponenten initialiseras
  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courselist = data;
      this.filteredCourse = data;
      this.uniqueSubjects = [...new Set(data.map(course => course.subject))];
    });
  }

  //Methods
  //Metod som körs när användaren skriver in något i input-fältet, filtrerar kurser utifrån matchning med kurskod och kursnamn samt valt ämne
  applyFilter(): void {
    this.filteredCourse = this.courselist.filter((course) =>
      (course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) || course.courseName.toLowerCase().includes(this.filterValue.toLowerCase())) &&
      //Kontrollerar om det finns ett valt ämne  
      (this.selectedSubject === "" || course.subject === this.selectedSubject)
    );
  }

  //Metod som körs när användaren väljer ett alternativ i select-menyn
  filterBySubject(): void {
    //Använder metoden för att filtrera kurser utifrån det ämne som har valts
    this.applyFilter();
  }

  //Metod som körs vid klick på "Kurskod", "Kursnamn" eller "Poäng", "Ämne"
  sortCourse(sort: string): void {
    //Om samma kolumn klickas på två gången, vänd sorteringen
    if (this.sortBy === sort) {
      this.filteredCourse.reverse();
    } else {
      //Annars sortera kurserna efter den klickade kolumnen
      this.sortBy = sort;
      this.filteredCourse.sort((a, b) => {
        if (sort === 'courseCode') {
          return a.courseCode.localeCompare(b.courseCode);
        } else if (sort === 'courseName') {
          return a.courseName.localeCompare(b.courseName);
        } else if (sort === 'points') {
          return a.points - b.points;
        } else if (sort === 'subject') {
          return a.subject.localeCompare(b.subject);
        }
        //Om kolumnen inte matchar något av värdena, behåll ordningen
        return 0;
      });
    }
  }
}