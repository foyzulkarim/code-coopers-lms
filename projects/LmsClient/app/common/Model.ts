module App {
    export class Entity {
        id: string;
        created: Date;
        modified: Date;
        createdBy: string;
        modifiedBy: string;
        createdFrom: string;
        modifiedFrom: string;
        isDeleted: boolean = false;

        constructor() {
            this.id = '1';
            this.created = new Date();
            this.modified = new Date();
            this.createdBy = "";
            this.modifiedBy = "";
            this.createdFrom = "Browser";
            this.modifiedFrom = "Browser";
            this.isDeleted = false;
        }
    }
}