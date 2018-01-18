module App {

    export class BaseService<T> {
        baseRepository: WebService;
        q: angular.IQService;      
        private baseApiUrl: string;
        private url: string;

        constructor(baseRepository: WebService, q: angular.IQService, url: string) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.baseApiUrl = AppConstants.BaseApiUrl;
            this.url = url; // 'teacher' / 'student' etc
        }

        save(data: any): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();

            var successCallback = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            
            data.created = new Date();
            data.modified = new Date();
            data.createdBy = "me";
            data.modifiedBy = "me";
            var url = self.baseApiUrl + self.url + "/Add";
            self.baseRepository.post(url, data).then(successCallback, errorCallback);
            return deffered.promise;
        }

        getSelectList(url: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();

            var successCallback = function (successresponse) {
                //console.log(successresponse);
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };

            self.baseRepository.get(url).then(successCallback, errorCallback);
            return deffered.promise;
        }

        search(request: any): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();

            var successCallback = function (successresponse) {
                //console.log(successresponse);
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };

            var url = self.baseApiUrl + self.url + "Query/Search";
            self.baseRepository.post(url, request).then(successCallback, errorCallback);
            return deffered.promise;
        }
    }
}