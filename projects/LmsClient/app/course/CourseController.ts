module App {

    export class Course extends Entity {
        constructor() {
            super();
            this.fee = 0;
            this.teacherId = "1";
        }

        name: string;
        description: string;
        requirements: string;
        fee: number;
        posterUrl: string;
        promoVideoUrl: string;
        language: string;
        teacherId:string;
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


    export class TeacherCoursesController extends BaseController<Course> implements angular.IController {
        $onInit(): void {
          
        }

        static $inject: string[] =
        [
            "$rootScope", "$scope", "$location", "$state", "$stateParams",
            "SearchService", "SaveService", "LocalStorageService"
        ];
      

        constructor(
            rootScope: angular.IRootScopeService,
            scope: angular.IScope,
            $location: angular.ILocationService,
            $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService,
            search: SearchService,
            save: SaveService,
            storageService: LocalStorageService,
        ) {
            super(rootScope, scope, $location, $state, $stateParams, search, save, storageService, AppConstants.Course);
            console.log('i am in TeacherCoursesController');
            this.search("/Teacher/MyCourses");
        }
        
    }

    angular.module('app').controller('TeacherCoursesController', TeacherCoursesController);

    export class TeacherCourseController extends BaseController<Course> implements angular.IController {

        $onInit(): void { }

        model: Course;

        static $inject: string[] =
        [
           "$rootScope","$scope", "$location", "$state", "$stateParams",
            "SearchService", "SaveService", "LocalStorageService"
        ];

        constructor(
            rootScope: angular.IRootScopeService,
            scope: angular.IScope,
            $location: angular.ILocationService,
            $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService,
            search: SearchService,
            save: SaveService,
            storageService: LocalStorageService,
            ) {
            super(rootScope, scope, $location, $state, $stateParams, search, save, storageService, AppConstants.Course);
            console.log('i am in TeacherCourseController');
            this.model = new Course();
        }
        
    }

    angular.module('app').controller('TeacherCourseController', TeacherCourseController);
}