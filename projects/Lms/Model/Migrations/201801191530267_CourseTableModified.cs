namespace Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CourseTableModified : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Courses", "Name", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("dbo.Courses", "Description", c => c.String(maxLength: 400));
            AlterColumn("dbo.Courses", "Requirements", c => c.String(maxLength: 100));
            AlterColumn("dbo.Courses", "PosterUrl", c => c.String(nullable: false, maxLength: 300));
            AlterColumn("dbo.Courses", "PromoVideoUrl", c => c.String(maxLength: 300));
            CreateIndex("dbo.Courses", "Name");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Courses", new[] { "Name" });
            AlterColumn("dbo.Courses", "PromoVideoUrl", c => c.String());
            AlterColumn("dbo.Courses", "PosterUrl", c => c.String());
            AlterColumn("dbo.Courses", "Requirements", c => c.String());
            AlterColumn("dbo.Courses", "Description", c => c.String());
            AlterColumn("dbo.Courses", "Name", c => c.String());
        }
    }
}
