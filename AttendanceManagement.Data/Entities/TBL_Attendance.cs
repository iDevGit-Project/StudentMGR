using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceManagement.Data.Entities
{
    public class TBL_Attendance : TBLMASTER_BaseEntity
    {
        public class Attendance
        {
            [Required(ErrorMessage = "لطفاً تاریخ حضور را وارد کنید.")]
            public DateTime? Date { get; set; }

            [Required(ErrorMessage = "لطفاً وضعیت حضور را انتخاب کنید.")]
            public AttendanceStatus Status { get; set; }

            public string Desccription { get; set; } // توضیحات برای غیبت یا تاخیر

            // کلید خارجی برای ارتباط با دانش‌آموز
            [Required]
            public int StudentId { get; set; }

            [ForeignKey("StudentId")]
            public TBL_Student TBLStudents { get; set; } // ارتباط با مدل دانش‌آموز
        }

        public enum AttendanceStatus
        {
            حاضر,         // Present
            غایب,         // Absent
            غیبت_موجه,    // Excused
            غیبت_غیرموجه, // Unexcused
            تاخیر          // Late
        }
    }
}
