document.addEventListener("DOMContentLoaded", () => {
    const exportMenu = document.getElementById("kt_datatable_export_menu");
    const exportConfirmationModal = new bootstrap.Modal(document.getElementById("exportConfirmationModal"));
    const rowInput = document.getElementById("rowIndices");
    const columnInput = document.getElementById("columnIndices");
    let selectedExportType = null;

    // محدود کردن ورودی به عدد و کاراکتر انگلیسی
    function restrictToNumbersAndEnglish(inputElement) {
        inputElement.addEventListener("input", () => {
            inputElement.value = inputElement.value.replace(/[^0-9,]/g, ""); // فقط اعداد و کاما مجاز است
        });
    }

    restrictToNumbersAndEnglish(rowInput);
    restrictToNumbersAndEnglish(columnInput);

    exportMenu.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.closest("[data-kt-export]");
        if (!target) return;
        selectedExportType = target.getAttribute("data-kt-export");

        // نمایش مودال تایید
        exportConfirmationModal.show();
    });

    // دکمه تایید برای عملیات
    document.getElementById("confirmExport").addEventListener("click", async () => {
        const rowIndices = rowInput.value
            ? rowInput.value.split(",").map((i) => parseInt(i.trim())).filter((i) => !isNaN(i))
            : [];
        const columnIndices = columnInput.value
            ? columnInput.value.split(",").map((i) => parseInt(i.trim())).filter((i) => !isNaN(i))
            : [];

        exportConfirmationModal.hide();  // بسته شدن مودال پس از تایید

        Swal.fire({
            icon: "success",
            title: "عملیات موفق",
            text: "عملیات خروجی با موفقیت انجام شد.",
            buttonsStyling: false,
            confirmButtonText: "ثبت و بازگشت",
            customClass: { confirmButton: "btn btn-sm btn-light-success" },
        }).then(async () => {
            if (selectedExportType === "excel") {
                generateExcelAsXLSX("datatable_Discounts", "DataExport.xlsx", columnIndices, rowIndices);
            }
        });
    });

    // دکمه لغو برای عملیات
    document.getElementById("cancelExport").addEventListener("click", () => {
        exportConfirmationModal.hide();  // بسته شدن مودال پس از لغو

        // پیام لغو عملیات
        Swal.fire({
            title: "انصراف",
            text: "عملیات خروجی فایل لغو شد.",
            buttonsStyling: false,
            confirmButtonText: "قبول و بازگشت",
            customClass: { confirmButton: "btn btn-sm btn-danger" },
        });
    });
});

// تابع تولید فایل اکسل
function generateExcelAsXLSX(tableId, fileName, columnsToHide = [], rowsToHide = []) {
    const table = document.getElementById(tableId);
    if (!table) {
        Swal.fire({
            title: "خطا",
            text: "جدول مورد نظر پیدا نشد.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "بازگشت",
            customClass: { confirmButton: "btn btn-sm btn-danger" },
        });
        return;
    }

    const rows = Array.from(table.rows).filter((_, i) => !rowsToHide.includes(i));
    const data = rows.map((row) =>
        Array.from(row.cells)
            .filter((_, index) => !columnsToHide.includes(index))
            .map((cell) => cell.innerText)
    );

    // بررسی خالی نبودن داده‌ها
    if (data.length === 0) {
        Swal.fire({
            title: "هشدار",
            text: "هیچ داده‌ای برای خروجی وجود ندارد.",
            icon: "warning",
            buttonsStyling: false,
            confirmButtonText: "بازگشت",
            customClass: { confirmButton: "btn btn-sm btn-warning" },
        });
        return;
    }

    // ایجاد یک ورک‌بوک جدید
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    // افزودن برگه به ورک‌بوک
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // به دست آوردن محتوای اکسل به عنوان باینری
    const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // تبدیل باینری به Blob برای ذخیره‌سازی در فایل
    const blob = new Blob([s2ab(excelFile)], { type: "application/octet-stream" });

    // ایجاد لینک دانلود و شبیه‌سازی کلیک برای ذخیره‌سازی فایل
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // اطمینان از انجام عملیات در زمان کاربر
    document.body.appendChild(link); // این خط برای اطمینان از رفتار درست لینک در مرورگرهای خاص ضروری است
    link.click();
    document.body.removeChild(link); // حذف لینک بعد از کلیک
}

// تابع برای تبدیل رشته به بایت
function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
}
