using AttendanceManagement.Data.Context;
using AttendanceManagement.PublicMethodClass;
using Microsoft.EntityFrameworkCore;
using NToastNotify;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

#region سرویس مربوط به تاریخ شمسی
builder.Services.AddTransient<PersianDateTimeConvert>();
#endregion

#region تنظیمات رشته اتصال به پایگاه داده

builder.Services.AddDbContext<ApplicationDbContext>(option =>
{
    // MS-SqlServer تنظیمات برای پایگاه داده 
    option.UseSqlServer(builder.Configuration.GetConnectionString("StrStuMGRConDb"));
});
#endregion

#region به همراه پیکربندی آن ToastNotify سرویس مربوط به افزونه
builder.Services.AddMvc().AddNToastNotifyToastr(new ToastrOptions
{
    ProgressBar = true,
    CloseButton = true,
    NewestOnTop = true,
    PositionClass = ToastPositions.TopCenter,
});
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
