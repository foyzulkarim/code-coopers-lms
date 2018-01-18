module App {

    export class Course extends Entity {
        constructor() {
            super();
            this.fee = 0;
        }

        name: string;
        description: string;
        requirements: string;
        isFree: boolean;
        teacherId: string;
        fee: number;
    }

    export class CoursesController implements angular.IController {
        $onInit(): void { }

        model: Course;

        constructor() {
            console.log('hi. i am in CourseController');
            this.model = new Course();
        }
    }

    angular.module('app').controller('CoursesController', CoursesController);


    export class TeacherCoursesController implements angular.IController {
        $onInit(): void { }


        constructor() {
            console.log('i am in TeacherCoursesController');
        }

        search(): void {

        }
    }

    angular.module('app').controller('TeacherCoursesController', TeacherCoursesController);

    export class TeacherCourseController extends BaseController<Course> implements angular.IController {
        
        static $inject = ["CourseService"];
        constructor(service: CourseService) {
            super(service);
            this.reset();
        }

        save(): void {
            var self = this;
            if (self.model.fee == null || self.model.fee == 0) {
                self.model.isFree = true;
            }
            super.save();
        }

        reset(): void {
            var self = this;
            self.model = new Course();
        }
        $onInit(): void {}
    }

    angular.module('app').controller('TeacherCourseController', TeacherCourseController);
}