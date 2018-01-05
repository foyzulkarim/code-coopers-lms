namespace Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CourseV1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Courses",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Description = c.String(),
                        Requirements = c.String(),
                        Fee = c.Double(nullable: false),
                        IsFree = c.Boolean(nullable: false),
                        TeacherId = c.String(),
                        PosterUrl = c.String(),
                        PromoVideoUrl = c.String(),
                        Created = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false),
                        Modified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(nullable: false),
                        CreatedFrom = c.String(nullable: false),
                        ModifiedFrom = c.String(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Courses");
        }
    }
}
