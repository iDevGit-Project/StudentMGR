using Microsoft.AspNetCore.Mvc;

namespace AttendanceManagement.ViewComponents
{
    #region کامپوننت آیتم اطلاعات برنامه و نسخه جاری نرم افزار
    public class TopRightDetailsApplicationViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("TopRightDetailsApplication");
        }
    }
    #endregion

    #region کامپوننت آیتم آیکن ارسال پیامک و ثبت داده جدید
    public class TopLeftSMSForCustomerViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("TopLeftSMSForCustomer");
        }
    }
    #endregion

    #region کامپوننت منوهای سفید سمت راست
    public class AsideRightMenuViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenu");
        }
    }
    #endregion

    #region Home کامپوننت منوهای مشکی سمت راست - آیتم 
    public class AsideRightMenuDark_HomeViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Home");
        }
    }
    #endregion

    #region  کامپوننت منوهای مشکی سمت راست - آیتم مدیریت اطلاعات پایه
    public class AsideRightMenuDark_Item_BasicManagementViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_BasicManagement");
        }
    }
    #endregion

    #region کامپوننت اطلاعات پروفایل کاربر و مدیر سیستم
    public class AsideRightDarkProfileViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightDarkProfile");
        }
    }
    #endregion

    #region کامپوننت زیرمنوهای مشکی سمت راست
    public class AsideRightDarkSecondaryMenuViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightDarkSecondaryMenu");
        }
    }
    #endregion

    #region کامپوننت آیتم های کپی رایت در قسمت فوتر
    public class ButtomRightCopyRightViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("ButtomRightCopyRight");
        }
    }
    #endregion

    #region کامپوننت آیتم اطلاعات تماس و درباره برنامه
    public class ButtomLeftinformationViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("ButtomLeftinformation");
        }
    }
    #endregion

    #region کامپوننت دریافت پیام آنلاین مشتریان قسمت اول
    public class TicketCustomersInformationPartAViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("TicketCustomersInformationPartA");
        }
    }
    #endregion

    #region کامپوننت دریافت پیام آنلاین مشتریان قسمت دوم
    public class TicketCustomersInformationPartBViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("TicketCustomersInformationPartB");
        }
    }
    #endregion

    #region کامپوننت بخش تبلیغات و مدیریت آن
    public class AsideRightMenuDark_Item_AdvertisementViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_Advertisement");
        }
    }
    #endregion

    #region کامپوننت مدیریت ارسال خطاها به واحد طراحی و توسعه
    public class AsideRightMenuDark_Item_DevReportsViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_DevReports");
        }
    }
    #endregion

    #region کامپوننت بخش اطلاع رسانی ها و اخبار
    public class AsideRightMenuDark_Item_News_And_InformationViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_News_And_Information");
        }
    }
    #endregion

    #region کامپوننت گزارشات سیستم
    public class AsideRightMenuDark_Item_ReportsViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_Reports");
        }
    }
    #endregion

    #region کامپوننت تنظیمات فروشگاه آنلاین
    public class AsideRightMenuDark_Item_ShopSettingsViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_ShopSettings");
        }
    }
    #endregion

    #region کامپوننت مدیریت سیستم پیامک
    public class AsideRightMenuDark_Item_SMSViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_SMS");
        }
    }
    #endregion

    #region کامپوننت بخش تیکت های پشتیبانی مشتریان
    public class AsideRightMenuDark_Item_TicketsViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_Tickets");
        }
    }
    #endregion

    #region کامپوننت بخش مدیریت نقش های کاربران
    public class AsideRightMenuDark_Item_RoleUserViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("AsideRightMenuDark_Item_RoleUser");
        }
    }
    #endregion
}
