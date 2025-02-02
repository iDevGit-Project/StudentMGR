using System.Diagnostics;
using AttendanceManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace AttendanceManagement.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
