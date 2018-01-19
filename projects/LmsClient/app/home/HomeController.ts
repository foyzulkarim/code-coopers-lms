module App {

    class HomeController extends BaseController<Course> {

        static $inject: string[] = ["$rootScope","$scope", "$location", "$state", "$stateParams", "SearchService", "SaveService","LocalStorageService"];
        isSignedIn: boolean;
       
        constructor(
            rootScope: angular.IRootScopeService,
            scope: angular.IScope,
            location: angular.ILocationService,
            state: angular.ui.IStateService,
            stateParams: angular.ui.IStateParamsService,
            search: SearchService,
            save: SaveService,
            storage: LocalStorageService
        ) {
            super(rootScope,scope,location, state, stateParams, search, save, storage, AppConstants.Course);
            var self = this;
            let userInfo = self.localStorageService.get(LocalStorageKeys.UserInfo) as UserInfo;
            if (userInfo) {
                this.signedInSuccessfully();
            } else {
                this.signedOutSuccessfully();
            }

            rootScope.$on("signedout", () => { self.signedOutSuccessfully(); });

            // load courses
            this.search("/Student/AllCourses");

        }

        message: string;
        values: number[] = [];

        signedOutSuccessfully(): void {
            this.isSignedIn = false;
            this.message = "";
        }

        signedInSuccessfully(): void {
            let self = this;
            self.isSignedIn = true;
            this.message = new Date().toDateString();
            for (let i = 0; i < 10; i++) {
                self.values.push(i);
            }
        }
    }

    angular.module('app').controller('HomeController', (HomeController) as any);
}