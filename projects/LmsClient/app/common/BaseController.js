var App;
(function (App) {
    var Guid = /** @class */ (function () {
        function Guid() {
        }
        Guid.newGuid = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        Guid.defaultGuid = function () {
            return '00000000-0000-0000-0000-000000000000';
        };
        return Guid;
    }());
    App.Guid = Guid;
    var BaseController = /** @class */ (function () {
        function BaseController(rootScope, scope, $location, $state, $stateParams, search, save, storageService, commandUrl) {
            this.rootScope = rootScope;
            this.scope = scope;
            this.location = $location;
            this.commandUrl = commandUrl;
            this.queryUrl = this.commandUrl + "Query";
            this.searchService = search;
            this.saveService = save;
            this.stateService = $state;
            this.stateParams = $stateParams;
            this.localStorageService = storageService;
            this.activate();
        }
        BaseController.prototype.$onInit = function () { };
        BaseController.prototype.goto = function (page) {
            this.searchRequest.page = page;
            this.search();
        };
        BaseController.prototype.createInstance = function (c) {
            return new c();
        };
        BaseController.prototype.activate = function () {
            this.model = this.createInstance(App.Entity);
            this.model.id = "";
            this.models = [];
            this.isUpdateMode = false;
            this.searchRequest = new App.SearchRequest("", "Modified", "False", "");
            this.searchRequest.page = 1;
        };
        BaseController.prototype.search = function () {
            var self = this;
            var successCallback = function (response) {
                console.log(response);
                self.totalCount = response.count;
                self.models = response.models;
                if (self.models.length === 0) {
                    console.log('No search result found');
                }
                self.searchRequest.totalPage = Math.ceil(response.count / 10);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.searchService
                .search(self.searchRequest, self.queryUrl + "/Search")
                .then(successCallback, errorCallback);
        };
        BaseController.prototype.edit = function (id) {
            var self = this;
            var onSuccess = function (data) {
                self.model = data.data;
            };
            var onError = function (error) {
                console.log(error);
                alert('Error occurred');
            };
            var searchRequest = new App.SearchRequest();
            searchRequest.id = id;
            var url = self.queryUrl + '/SearchDetail';
            self.searchService.search(searchRequest, url).then(onSuccess, onError);
        };
        BaseController.prototype.save = function () {
            var self = this;
            if (self.isUpdateMode)
                self.update();
            else {
                var successCallback = function (response) {
                    self.activate();
                };
                var errorCallback = function (error) {
                    console.log(error);
                    if (error.status === 500) {
                        alert(error.data.exceptionMessage);
                    }
                };
                self.saveService.save(self.model, self.commandUrl + "/Add").then(successCallback, errorCallback);
            }
        };
        BaseController.prototype.update = function () {
            var self = this;
            var successCallback = function (response) {
                self.activate();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.saveService.update(self.model, self.commandUrl + "/Edit").then(successCallback, errorCallback);
        };
        BaseController.prototype.delete = function (id) {
            var self = this;
            var successCallback = function (response) {
                self.activate();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.saveService.delete(id, self.commandUrl + "/Delete").then(successCallback, errorCallback);
        };
        BaseController.prototype.pad = function (num, size) {
            var s = num + "";
            while (s.length < size)
                s = "0" + s;
            return s;
        };
        BaseController.prototype.generateOrderNumber = function () {
            var date = new Date();
            var orderNumber = this.pad(date.getMilliseconds(), 3) +
                '' +
                this.pad(date.getMinutes(), 2) +
                '-' +
                this.pad(date.getHours(), 2) +
                this.pad(date.getDate(), 2) +
                this.pad(date.getMonth() + 1, 2) +
                '-' +
                date.getFullYear();
            return orderNumber;
        };
        BaseController.prototype.back = function () {
            window.history.back();
        };
        BaseController.prototype.navigateState = function (stateName, param) {
            var self = this;
            self.stateService.go(stateName, param);
        };
        return BaseController;
    }());
    App.BaseController = BaseController;
})(App || (App = {}));
//# sourceMappingURL=BaseController.js.map