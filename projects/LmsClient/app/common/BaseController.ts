module App {

    export class Guid {
        public static newGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
                c => {
                    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
        }

        public static defaultGuid() {
            return '00000000-0000-0000-0000-000000000000';
        }
    }

    export class BaseController<T extends Entity> implements angular.IController {

        // my services
        searchService: SearchService;
        saveService: SaveService;
        localStorageService: LocalStorageService;

        subUrlPath: string;

        // my variables
        searchRequest: SearchRequest;
        isUpdateMode: boolean;
        user: UserInfo;

        // angular ui params
        stateService: angular.ui.IStateService;
        stateParams: angular.ui.IStateParamsService;
        location: angular.ILocationService;

        rootScope: angular.IRootScopeService;
        scope: angular.IScope;

        // generic variables
        commandUrl: string;
        queryUrl: string;

        models: T[];
        totalCount: number;
        model: T;

        $onInit(): void { }

        constructor(
            rootScope: angular.IRootScopeService,
            scope: angular.IScope,
            $location: angular.ILocationService,
            $state: angular.ui.IStateService,
            $stateParams: angular.ui.IStateParamsService,
            search: SearchService,
            save: SaveService,
            storageService: LocalStorageService,
            commandUrl: string
        ) {
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

        goto(page: number): void {
            this.searchRequest.page = page;
            this.search();
        }

        createInstance<Entity>(c: new () => Entity): Entity {
            return new c();
        }

        activate() {
            this.model = this.createInstance(Entity) as T;
            this.model.id = "";
            this.models = [];
            this.isUpdateMode = false;
            this.searchRequest = new SearchRequest("", "Modified", "False", "");
            this.searchRequest.page = 1;
        }

        search(urlActionSuffix: string = ""): void {
            var self = this;
            var successCallback = (response: SearchResponse): void => {
                console.log("search-successCallback : ",response);
                self.totalCount = response.count;
                self.models = <any>response.models;
                if (self.models.length === 0) {
                    console.log('No search result found');
                }

                self.searchRequest.totalPage = Math.ceil(response.count / 10);
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };

            let actionSuffix = "/Search";
            if (urlActionSuffix.length>0) {
                actionSuffix = urlActionSuffix;
            }

            self.searchService
                .search(self.searchRequest, self.queryUrl + actionSuffix)
                .then(<any>successCallback, errorCallback);
        }

        edit(id: string): void {
            var self = this;
            var onSuccess = (data: SearchResponse) => {
                self.model = data.data;
            }

            var onError = (error: any) => {
                console.log(error);
                alert('Error occurred');
            }

            var searchRequest = new SearchRequest();
            searchRequest.id = id;

            var url = self.queryUrl + '/SearchDetail';
            self.searchService.search(searchRequest, url).then(onSuccess, onError);
        }

        save(): void {
            var self = this;

            if (self.isUpdateMode) self.update();

            else {
                var successCallback = (response: BaseResponse): void => {
                    self.activate();
                };
                var errorCallback = (error: any): void => {
                    console.log(error);
                    if (error.status === 500) {
                        alert(error.data.exceptionMessage);
                    }
                };

                self.saveService.save(self.model, self.commandUrl + "/Add").then(<any>successCallback, errorCallback);
            }
        }

        update(): void {
            var self = this;
            var successCallback = (response: BaseResponse): void => {
                self.activate();
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };

            self.saveService.update(self.model, self.commandUrl + "/Edit").then(<any>successCallback, errorCallback);
        }

        delete(id: string): void {
            var self = this;
            var successCallback = (response: BaseResponse): void => {
                self.activate();
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };
            self.saveService.delete(id, self.commandUrl + "/Delete").then(successCallback, errorCallback);
        }

        private pad(num: number, size: number): string {
            var s = num + "";
            while (s.length < size) s = "0" + s;
            return s;
        }

        generateOrderNumber(): string {
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
        }

        back(): void {
            window.history.back();
        }

        navigateState(stateName: string, param: any): void {
            var self = this;
            self.stateService.go(stateName, param);
        }
    }
}