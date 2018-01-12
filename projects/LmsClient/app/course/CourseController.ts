module App {

    export class Course extends Entity {
        constructor() {
            super();
            this.fee = 0;
        }

        name: string;
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
    }

    angular.module('app').controller('TeacherCoursesController', TeacherCoursesController);

    export class TeacherCourseController implements angular.IController {
        $onInit(): void { }

        constructor() {
            console.log('i am in TeacherCourseController');
        }
    }

    angular.module('app').controller('TeacherCourseController', TeacherCourseController);
}