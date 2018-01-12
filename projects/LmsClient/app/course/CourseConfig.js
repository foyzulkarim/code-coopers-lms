var App;
(function (App) {
    var CourseConfig = /** @class */ (function () {
        function CourseConfig(stateProvider, urlRouteProvider) {
            stateProvider // course
                .state("root.teacher-course-list", {
                url: "/teacher-course-list",
                templateUrl: "partials/course/teacher-course-list.tpl.html",
                controller: "TeacherCoursesController",
                controllerAs: "vm"
            })
                .state("root.teacher-course-entry", {
                url: "/teacher-course-entry",
                templateUrl: "partials/course/teacher-course-entry.tpl.html",
                controller: "TeacherCourseController",
                controllerAs: "vm"
            }).state("root.teacher-course-edit", {
                url: "/teacher-course-edit/:id",
                templateUrl: "partials/course/teacher-course-entry.tpl.html",
                controller: "TeacherCourseController",
                controllerAs: "vm"
            });
        }
        CourseConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        return CourseConfig;
    }());
    angular.module('app').config(CourseConfig);
})(App || (App = {}));
//# sourceMappingURL=CourseConfig.js.map