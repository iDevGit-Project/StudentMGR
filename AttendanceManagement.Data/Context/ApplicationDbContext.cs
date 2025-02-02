using AttendanceManagement.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceManagement.Data.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        #region DbSets All Tables
        public DbSet<TBL_Student> TBLStudents { get; set; }
        public DbSet<TBL_ClassGroup> TBLClassGroups { get; set; }
        public DbSet<TBL_Attendance> TBLAttendances { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // عملیات حذف برای جدول دانش آموزان
            modelBuilder.Entity<TBL_Student>().HasQueryFilter(b => b.IsRemove == false);
            // عملیات حذف برای جدول گروه بندی کلاس
            modelBuilder.Entity<TBL_ClassGroup>().HasQueryFilter(w => w.IsRemove == false);
            // عملیات حذف برای جدول حضور و غیاب
            modelBuilder.Entity<TBL_Attendance>().HasQueryFilter(s => s.IsRemove == false);

            // رفع خطای مشکل زمانی که مثلاً اگر منوی اصلی حذف شد، زیرمنوهای آن نیز حذف می شوند
            var cacade = modelBuilder.Model.GetEntityTypes()
            .SelectMany(x => x.GetForeignKeys())
            .Where(x => !x.IsOwnership && x.DeleteBehavior == DeleteBehavior.Cascade);

            foreach (var type in cacade)
                type.DeleteBehavior = DeleteBehavior.Cascade;
            base.OnModelCreating(modelBuilder);

            //// تنظیم ارتباط یک‌به‌چند بین Student و ClassGroup
            //modelBuilder.Entity<TBL_Student>()
            //    .HasOne(s => s.TBLClassGroups)
            //    .WithMany(c => c.TBLStudents)
            //    .HasForeignKey(s => s.ClassGroupId)
            //    .OnDelete(DeleteBehavior.Cascade);

            //// تنظیم ارتباط یک‌به‌چند بین Attendance و Student
            //modelBuilder.Entity<TBL_Attendance>()
            //    .HasOne(a => a.TBLStudents)
            //    .WithMany()
            //    .HasForeignKey(a => a.StudentId)
            //    .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}
