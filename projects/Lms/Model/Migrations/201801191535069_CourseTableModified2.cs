namespace Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CourseTableModified2 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Courses", "IsFree");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Courses", "IsFree", c => c.Boolean(nullable: false));
        }
    }
}
