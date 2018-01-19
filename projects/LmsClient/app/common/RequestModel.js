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
    "use strict";
    var Entity = /** @class */ (function () {
        function Entity() {
            this.isDeleted = false;
            this.id = '1';
            this.created = new Date().toDateString();
            this.modified = new Date().toDateString();
            this.createdBy = "";
            this.modifiedBy = "";
            this.createdFrom = "Browser";
            this.modifiedFrom = "Browser";
            this.isDeleted = false;
        }
        return Entity;
    }());
    App.Entity = Entity;
    var Notification = /** @class */ (function () {
        function Notification() {
        }
        return Notification;
    }());
    App.Notification = Notification;
    var DataRequest = /** @class */ (function () {
        function DataRequest() {
        }
        return DataRequest;
    }());
    App.DataRequest = DataRequest;
    var SearchRequest = /** @class */ (function (_super) {
        __extends(SearchRequest, _super);
        function SearchRequest(keyword, orderBy, isAsc, parentId) {
            if (keyword === void 0) { keyword = ""; }
            if (orderBy === void 0) { orderBy = "Modified"; }
            if (isAsc === void 0) { isAsc = "false"; }
            if (parentId === void 0) { parentId = ""; }
            var _this = _super.call(this) || this;
            _this.keyword = keyword;
            _this.orderBy = orderBy;
            _this.isAscending = isAsc;
            _this.parentId = parentId;
            _this.page = 1;
            return _this;
        }
        return SearchRequest;
    }(DataRequest));
    App.SearchRequest = SearchRequest;
    var DetailRequest = /** @class */ (function (_super) {
        __extends(DetailRequest, _super);
        function DetailRequest(id) {
            var _this = _super.call(this) || this;
            _this.id = id;
            return _this;
        }
        DetailRequest.prototype.getQueryString = function () {
            return "?id=" + this.id;
        };
        return DetailRequest;
    }(DataRequest));
    App.DetailRequest = DetailRequest;
})(App || (App = {}));
//# sourceMappingURL=RequestModel.js.map