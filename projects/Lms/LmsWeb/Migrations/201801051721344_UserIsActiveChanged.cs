namespace LmsWeb.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserIsActiveChanged : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.AspNetUsers", "IsActive", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.AspNetUsers", "IsActive", c => c.String());
        }
    }
}
