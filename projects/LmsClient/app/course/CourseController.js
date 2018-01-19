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
            _this.teacherId = "1";
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
    var TeacherCoursesController = /** @class */ (function (_super) {
        __extends(TeacherCoursesController, _super);
        function TeacherCoursesController(rootScope, scope, $location, $state, $stateParams, search, save, storageService) {
            var _this = _super.call(this, rootScope, scope, $location, $state, $stateParams, search, save, storageService, App.AppConstants.Course) || this;
            console.log('i am in TeacherCoursesController');
            _this.search("/Teacher/MyCourses");
            return _this;
        }
        TeacherCoursesController.prototype.$onInit = function () {
        };
        TeacherCoursesController.$inject = [
            "$rootScope", "$scope", "$location", "$state", "$stateParams",
            "SearchService", "SaveService", "LocalStorageService"
        ];
        return TeacherCoursesController;
    }(App.BaseController));
    App.TeacherCoursesController = TeacherCoursesController;
    angular.module('app').controller('TeacherCoursesController', TeacherCoursesController);
    var TeacherCourseController = /** @class */ (function (_super) {
        __extends(TeacherCourseController, _super);
        function TeacherCourseController(rootScope, scope, $location, $state, $stateParams, search, save, storageService) {
            var _this = _super.call(this, rootScope, scope, $location, $state, $stateParams, search, save, storageService, App.AppConstants.Course) || this;
            console.log('i am in TeacherCourseController');
            _this.model = new Course();
            return _this;
        }
        TeacherCourseController.prototype.$onInit = function () { };
        TeacherCourseController.$inject = [
            "$rootScope", "$scope", "$location", "$state", "$stateParams",
            "SearchService", "SaveService", "LocalStorageService"
        ];
        return TeacherCourseController;
    }(App.BaseController));
    App.TeacherCourseController = TeacherCourseController;
    angular.module('app').controller('TeacherCourseController', TeacherCourseController);
})(App || (App = {}));
//# sourceMappingURL=CourseController.js.map