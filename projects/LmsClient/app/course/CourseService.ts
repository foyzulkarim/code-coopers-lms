module App {
    export class CourseService extends BaseService<Course> {

        static $inject = ["UrlService", "WebService", "$q"];
        constructor(url: UrlService, baseRepository: WebService, q: angular.IQService) {
            super(baseRepository, q, url.course);
        }
    }

    angular.module('app').service("CourseService", CourseService);
}