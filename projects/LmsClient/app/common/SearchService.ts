// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export class SearchService  {
        q: angular.IQService;      
        web: WebService;

        static $inject: string[] = ["$q", "WebService"];

        id: string;
        
        constructor($q: angular.IQService,  webService: WebService) {
            this.q = $q;            
            this.web = webService;
            this.id = undefined;
        }

        search(request: SearchRequest, url: string): angular.IPromise<SearchResponse> {
            var self = this;
            var deffered: angular.IDeferred<SearchResponse> = self.q.defer();
            self.web.post(url, request).then((result: any): any => {
                var response = new SearchResponse(result.data);
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }
        
        get(url: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
            self.web.get(url).then((result: any): any => {
                var response = result.data;
                deffered.resolve(response);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }        

        download(url: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
            self.web.get(url).then((result: any): any => {                
                deffered.resolve(result);
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }        
    }


    angular.module("app").service("SearchService", SearchService);
}