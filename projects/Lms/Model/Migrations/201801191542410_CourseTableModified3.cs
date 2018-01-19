namespace Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CourseTableModified3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "TotalLevels", c => c.Int(nullable: false));
            AddColumn("dbo.Courses", "TotalSections", c => c.Int(nullable: false));
            AddColumn("dbo.Courses", "TotalViews", c => c.Int(nullable: false));
            AddColumn("dbo.Courses", "TotalEnrolled", c => c.Int(nullable: false));
            AddColumn("dbo.Courses", "Rating", c => c.Double(nullable: false));
            AddColumn("dbo.Courses", "Language", c => c.String());
            AlterColumn("dbo.Courses", "TeacherId", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Courses", "TeacherId", c => c.String());
            DropColumn("dbo.Courses", "Language");
            DropColumn("dbo.Courses", "Rating");
            DropColumn("dbo.Courses", "TotalEnrolled");
            DropColumn("dbo.Courses", "TotalViews");
            DropColumn("dbo.Courses", "TotalSections");
            DropColumn("dbo.Courses", "TotalLevels");
        }
    }
}
