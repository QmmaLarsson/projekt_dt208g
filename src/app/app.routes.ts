import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "courses", component: CoursesComponent },
    { path: "mycourses", component: MycoursesComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "404", component: NotfoundComponent },
    { path: "**", component: NotfoundComponent }
];
