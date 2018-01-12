var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var Course = /** @class */ (function (_super) {
        __extends(Course, _super);
        function Course() {
            var _this = _super.call(this) || this;
            _this.fee = 0;
            return _this;
        }
        return Course;
    }(App.Entity));
    App.Course = Course;
    var CoursesController = /** @class */ (function () {
        function CoursesController() {
            console.log('hi. i am in CourseController');
            this.model = new Course();
        }
        CoursesController.prototype.$onInit = function () { };
        return CoursesController;
    }());
    App.CoursesController = CoursesController;
    angular.module('app').controller('CoursesController', CoursesController);
    var TeacherCoursesController = /** @class */ (function () {
        function TeacherCoursesController() {
            console.log('i am in TeacherCoursesController');
        }
        TeacherCoursesController.prototype.$onInit = function () { };
        return TeacherCoursesController;
    }());
    App.TeacherCoursesController = TeacherCoursesController;
    angular.module('app').controller('TeacherCoursesController', TeacherCoursesController);
    var TeacherCourseController = /** @class */ (function () {
        function TeacherCourseController() {
            console.log('i am in TeacherCourseController');
        }
        TeacherCourseController.prototype.$onInit = function () { };
        return TeacherCourseController;
    }());
    App.TeacherCourseController = TeacherCourseController;
    angular.module('app').controller('TeacherCourseController', TeacherCourseController);
})(App || (App = {}));
//# sourceMappingURL=CourseController.js.map