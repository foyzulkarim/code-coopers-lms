var App;
(function (App) {
    var Entity = /** @class */ (function () {
        function Entity() {
            this.isDeleted = false;
            this.id = '1';
            this.created = new Date();
            this.modified = new Date();
            this.createdBy = "";
            this.modifiedBy = "";
            this.createdFrom = "Browser";
            this.modifiedFrom = "Browser";
            this.isDeleted = false;
        }
        return Entity;
    }());
    App.Entity = Entity;
})(App || (App = {}));
//# sourceMappingURL=Model.js.map