using MD.PersianDateTime.Standard;

namespace AttendanceManagement.PublicMethodClass
{
    public class PersianDateTimeConvert
    {
        public DateTime ConvertDateShamsiToMiladi(string Date)
        {
            PersianDateTime persianDateTime = PersianDateTime.Parse(Date);
            return persianDateTime.ToDateTime();
        }

        public string ConvertDateMiladiToShamsi(DateTime Date, string Format)
        {
            PersianDateTime persianDateTime = new PersianDateTime(Date);
            return persianDateTime.ToString(Format);
        }
    }
}
