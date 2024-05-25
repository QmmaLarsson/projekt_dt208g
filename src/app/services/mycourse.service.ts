import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class MycourseService {

  constructor() { }
    //Sparar course-arrayen till localStorage
    saveCourses(myCourselist: Course[]) {
      localStorage.setItem("courses", JSON.stringify(myCourselist));
    }

    //Hämtar course-arrayen från localStorage
    loadCourses(): Course[] {
      const courseStr = localStorage.getItem("courses");
  
      if (courseStr) {
        return JSON.parse(courseStr);
      } else {
        //Om inga kurser finns sparade, returnera en tom array
        return [];
      }
    }
}
