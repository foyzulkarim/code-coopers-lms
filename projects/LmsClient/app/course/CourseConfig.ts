module App {
    class CourseConfig {
        static $inject = ["$stateProvider", "$urlRouterProvider"];

        constructor(stateProvider: angular.ui.IStateProvider, urlRouteProvider: angular.ui.IUrlRouterProvider) {
            stateProvider // course
                .state("root.teacher-course-list",
                    {
                        url: "/teacher-course-list",
                        templateUrl: "partials/course/teacher-course-list.tpl.html",
                        controller: "TeacherCoursesController",
                        controllerAs: "vm"
                    })
                .state("root.teacher-course-entry",
                    {
                        url: "/teacher-course-entry",
                        templateUrl: "partials/course/teacher-course-entry.tpl.html",
                        controller: "TeacherCourseController",
                        controllerAs: "vm"
                }).state("root.teacher-course-edit",
                        {
                            url: "/teacher-course-edit/:id",
                            templateUrl: "partials/course/teacher-course-entry.tpl.html",
                            controller: "TeacherCourseController",
                            controllerAs: "vm"
                        })

                ;
        }
    }

    angular.module('app').config(CourseConfig);
}