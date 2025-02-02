using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceManagement.Data.Entities
{
    public class TBL_ClassGroup : TBLMASTER_BaseEntity
    {

        [Required(ErrorMessage = "وارد کردن {0} الزامیست .")]
        public string GroupName { get; set; }

        [Required(ErrorMessage = "وارد کردن {0} الزامیست .")]
        public string InstructorName { get; set; }

        [Required(ErrorMessage = "وارد کردن {0} الزامیست .")]
        [Range(1, int.MaxValue, ErrorMessage = "تعداد دانش‌آموز باید حداقل ۱ باشد.")]
        public int StudentCount { get; set; }

        // ارتباط یک‌به‌چند با Student
        public ICollection<TBL_Student> TBLStudents { get; set; }
    }
}
