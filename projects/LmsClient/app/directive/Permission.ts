angular.module('app').directive('accessControl',
    ([
         function () {
             console.log('i m   in access control  dir.');
            return {
                restrict: 'A',
                scope: "=",
                link: function (scope, element, attrs) {

                    scope.vm.canShow = function (resource) {
                        var resources = localStorage.getItem("UserInfo");
                        if (resources) {
                            let indexOf = resources.indexOf(resource);                           
                            return indexOf >= 0;
                        }

                        return false;                      
                    }

                    scope.vm.isDisabled = function(resource) {
                        if (resource.price>0) {
                            return true;
                        }
                        return false;
                    }                    
                }
            }
        }
    ]) as any);
