import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { courseService } from "./course.service";

@Component({
    templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(
        private activatedRoute: ActivatedRoute,
        private courseService: courseService
        ) {}


    ngOnInit(){
        window.scroll(0,0)

        this.course = this.courseService.retriveById(this.activatedRoute.snapshot.params['id']);

    }

    save(): void {
        this.courseService.saveCourse(this.course)
        
    }

}