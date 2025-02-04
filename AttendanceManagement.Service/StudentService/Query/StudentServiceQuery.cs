using AttendanceManagement.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceManagement.Service.StudentService.Query
{
    public class StudentServiceQuery
    {
        #region متد های پیکربندی اطلاعات دانش آموز در سمت سرور 

        private readonly ApplicationDbContext _context;
        public StudentServiceQuery(ApplicationDbContext context)
        {
            _context = context;
        }
        #endregion
    }
}
