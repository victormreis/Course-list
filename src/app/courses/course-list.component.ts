import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { courseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

  _courses: Course[] = [];


  _filterBy: string;

  constructor(private courseService: courseService) {

  }

  ngOnInit() {

    this.retrieveAll();

  }

  retrieveAll(): void {
    this.courseService.retriveAll().subscribe({
        next: courses => {
            this._courses = courses;
            this.filteredCourses = this._courses;
        },
        error: err => console.log('Eroor', err)
    });

  }


  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe ({
        next: () => {
            alert('Course deleted with success!')
            this.retrieveAll();
        },
        error: err => console.log('Error ', err)
    })
  }

  set filter(value: string){
      this._filterBy = value;
      this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);

  }

  get filter(){
      return this._filterBy;
  }

}
