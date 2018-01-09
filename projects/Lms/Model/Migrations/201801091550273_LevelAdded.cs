namespace Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LevelAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Levels",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Index = c.Int(nullable: false),
                        CourseId = c.String(maxLength: 128),
                        Created = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Modified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(nullable: false),
                        CreatedFrom = c.String(nullable: false),
                        ModifiedFrom = c.String(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Courses", t => t.CourseId)
                .Index(t => t.CourseId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Levels", "CourseId", "dbo.Courses");
            DropIndex("dbo.Levels", new[] { "CourseId" });
            DropTable("dbo.Levels");
        }
    }
}
