// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export class SaveService {
        q: angular.IQService;
        web: WebService;

        static $inject: string[] = ["$q", "WebService"];

        constructor($q: angular.IQService, webService: WebService) {
            this.q = $q;
            this.web = webService;
        }

        save(data: Entity, url: string): angular.IPromise<BaseResponse> {
            var self = this;
            var deferred: angular.IDeferred<BaseResponse> = self.q.defer();
            data.created = new Date().toDateString();
            data.modified = new Date().toDateString();
            data.createdBy = "me";
            data.createdFrom = "Browser";
            data.modifiedBy = "me";
            data.id = "1";
            self.web.post(url, data).then((result: any): any => {
                var response = new BaseResponse(true, result.data, "Success");
                deferred.resolve(response);
            }, error => {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        update(data: Entity, url: string): angular.IPromise<BaseResponse> {
            var self = this;
            var deffered: angular.IDeferred<BaseResponse> = self.q.defer();
            data.modified = new Date().toDateString();
            data.modifiedBy = "me";
            self.web.put(url, data).then((result: any): any => {
                var response = new BaseResponse(true, result.data, "Success");
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

        updateMultiple(data: Entity[], url: string): angular.IPromise<BaseResponse> {
            var self = this;
            var deffered: angular.IDeferred<BaseResponse> = self.q.defer();
            for (let i = 0; i < data.length; i++) {
                data[i].modified = new Date().toDateString();
                data[i].modifiedBy = "me";
            }

            self.web.put(url, data).then((result: any): any => {
                var response = new BaseResponse(true, result.data, "Success");
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

        delete(id: string, url: string): angular.IPromise<BaseResponse> {
            var self = this;
            var deffered: angular.IDeferred<BaseResponse> = self.q.defer();

            self.web.delete(url + "?id=" + id).then((result: any): any => {
                var response = new BaseResponse(true, result.data, "Success");
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }


    }


    angular.module("app").service("SaveService", SaveService);
}