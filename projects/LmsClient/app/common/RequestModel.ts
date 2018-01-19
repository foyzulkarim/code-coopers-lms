module App {
    "use strict";

    export class Entity {
        id: string;
        created: string;
        modified: string;
        createdBy: string;
        modifiedBy: string;
        createdFrom: string;
        modifiedFrom: string;
        isDeleted: boolean = false;

        constructor() {
            this.id = '1';
            this.created = new Date().toDateString();
            this.modified = new Date().toDateString();
            this.createdBy = "";
            this.modifiedBy = "";
            this.createdFrom = "Browser";
            this.modifiedFrom = "Browser";
            this.isDeleted = false;
        }
    }
    
    export class Notification {
        isError: boolean;
        isInfo: boolean;
        message: string;
    }

    export class DataRequest {
        id: string;
        page: number;
        orderBy: string;
        keyword: string;
        isAscending: string;
        parentId: string;
        totalPage: number;
        startDate: string;
        endDate: string;
        shopId: string;
        dateRange: string;
        isIncludeParents: boolean;
    }

    export class SearchRequest extends DataRequest {
        constructor(keyword = "", orderBy = "Modified", isAsc = "false", parentId = "") {
            super();
            this.keyword = keyword;
            this.orderBy = orderBy;
            this.isAscending = isAsc;
            this.parentId = parentId;
            this.page = 1;
        }
    }
     
    export class DetailRequest extends DataRequest {
        id: string;

        constructor(id: string) {
            super();
            this.id = id;
        }

        getQueryString(): string {
            return `?id=${this.id}`;
        }
    }    
}