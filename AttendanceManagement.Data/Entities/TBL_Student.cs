using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceManagement.Data.Entities
{
    public class TBL_Student : TBLMASTER_BaseEntity
    {
        [Required(ErrorMessage = "وارد کردن {0} الزامیست .")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "وارد کردن {0} الزامیست .")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "وارد کردن {0} الزامیست .")]
        public string FatherName { get; set; }

        [Required(ErrorMessage = "وارد کردن {0} الزامیست .")]
        public string SchoolName { get; set; }

        public string? ImgName { get; set; }

        [Required(ErrorMessage = "وارد کردن {0} الزامیست .")]
        public string Grade { get; set; }

        // کلید خارجی برای ارتباط با ClassGroup
        public int ClassGroupId { get; set; }

        [ForeignKey("ClassGroupId")]
        public TBL_ClassGroup TBLClassGroups { get; set; }
    }
}
