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
    var HomeController = /** @class */ (function (_super) {
        __extends(HomeController, _super);
        function HomeController(rootScope, scope, location, state, stateParams, search, save, storage) {
            var _this = _super.call(this, rootScope, scope, location, state, stateParams, search, save, storage, App.AppConstants.Course) || this;
            _this.values = [];
            var self = _this;
            var userInfo = self.localStorageService.get(App.LocalStorageKeys.UserInfo);
            if (userInfo) {
                _this.signedInSuccessfully();
            }
            else {
                _this.signedOutSuccessfully();
            }
            rootScope.$on("signedout", function () { self.signedOutSuccessfully(); });
            // load courses
            _this.search();
            return _this;
        }
        HomeController.prototype.signedOutSuccessfully = function () {
            this.isSignedIn = false;
            this.message = "";
        };
        HomeController.prototype.signedInSuccessfully = function () {
            var self = this;
            self.isSignedIn = true;
            this.message = new Date().toDateString();
            for (var i = 0; i < 10; i++) {
                self.values.push(i);
            }
        };
        HomeController.$inject = ["$rootScope", "$scope", "$location", "$state", "$stateParams", "SearchService", "SaveService", "LocalStorageService"];
        return HomeController;
    }(App.BaseController));
    angular.module('app').controller('HomeController', (HomeController));
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map