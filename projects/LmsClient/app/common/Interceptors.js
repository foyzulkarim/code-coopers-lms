angular.module('app').service("authInterceptorService",
    [
        "$q", "$injector", function ($q, $injector) {

            var authInterceptorServiceFactory = {};

            var request = function (config) {

                config.headers = config.headers || {};
                //config.headers.requestId = new Date().getTime();
                var authData = JSON.parse(localStorage.getItem("UserInfo"));
                if (authData) {
                    config.headers.Authorization = "Bearer" + " " + authData.token;
                }
                console.log('im in request http provider', config);
                return config;
            };

            var responseError = function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    console.log('permission rejection');
                    console.log(rejection);

                    var $state = $injector.get("$state");
                    $state.go("root.signin");
                }
                return $q.reject(rejection);
            };

            authInterceptorServiceFactory["request"] = request;
            authInterceptorServiceFactory["responseError"] = responseError;

            return authInterceptorServiceFactory;
        }
    ]);

angular.module("app").config([
    '$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push("authInterceptorService");
    }
]);