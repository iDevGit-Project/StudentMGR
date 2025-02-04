var OpenModal = {};
OpenModal.LoadModal = function () {
    var url = window.location.hash.toLowerCase();
    if (!url.startsWith("#showmodal")) {
        return;
    }
    url = url.split("showmodal=")[1];
    $.get(url,
        null,
        function (htmlPage) {
            $("#ModalContent").html(htmlPage);
            const container = document.getElementById("ModalContent");
            const forms = container.getElementsByTagName("form");
            const newForm = forms[forms.length - 1];
            $.validator.unobtrusive.parse(newForm);
            showModal();
        }).fail(function (error) {
            toastr.options = {
                // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
                "positionClass": "toast-top-full-width",
                "preventDuplicates": false,
                "progressBar": true,
                "newestOnTop": true,
                "closeButton": false,
                "debug": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "3500",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut",
            }
            toastr.options.onHidden = function () { location.reload(); }
            toastr["error"]("لطفاً اطلاعات را بررسی نمایید.", "خطای انجام عملیات")
        });
};

function showModal() {
    $("#MainModal").modal("show");
}

$(document).ready(function () {
    window.onhashchange = function () {
        OpenModal.LoadModal();
    };

    $("#MainModal").on("shown.bs.modal",
        function () {
            window.location.hash = "#";

        }
    );

    $(document).on("submit",
        'form[data-ajax="true"]',
        function (e) {
            e.preventDefault();
            var form = $(this);
            const method = form.attr("method").toLocaleLowerCase();
            const url = form.attr("action");

            if (method === "get") {
                const data = form.serializeArray();
                $.get(url, data, function () { });
            }
            else {
                var formData = new FormData(this);
                $.ajax({
                    url: url,
                    type: "post",
                    data: formData,
                    enctype: "multipart/form-data",
                    dataType: "json",
                    processData: false,
                    contentType: false,
                    success: function (data) {

                        message(data);

                    },
                    error: function (data) {
                        alert("خطا در انجام عملیات .");
                    }
                });
            }
            return false;
        }
    );
});
function message(final) {

    switch (final) {
        case 1:
            setTimeout(function () {
                toastr.options = {
                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
                    "positionClass": "toast-top-full-width",
                    "progressBar": true,
                    "newestOnTop": true,
                    "closeButton": false,
                    "preventDuplicates": false,
                    "debug": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "1000",
                    "extendedTimeOut": "3000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                toastr["success"]("ثبت اطلاعات با موفقیت انجام شد.", "عملیات موفق")
            }, 50)
            setTimeout(function () { window.location.reload() }, 1890)
            break;
        case 2:
            setTimeout(function () {
                toastr.options = {
                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
                    "positionClass": "toast-top-full-width",
                    "progressBar": true,
                    "newestOnTop": true,
                    "closeButton": false,
                    "preventDuplicates": false,
                    "debug": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "1000",
                    "extendedTimeOut": "3000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                toastr["info"]("ویرایش اطلاعات با موفقیت انجام شد.", "ویرایش موفق")
            }, 50)
            setTimeout(function () { window.location.reload() }, 1890)
            break;
        case 3:
            setTimeout(function () {
                toastr.options = {
                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
                    "positionClass": "toast-top-full-width",
                    "progressBar": true,
                    "newestOnTop": true,
                    "closeButton": false,
                    "preventDuplicates": false,
                    "debug": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "1000",
                    "extendedTimeOut": "3000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                toastr["error"]("حذف اطلاعات با موفقیت انجام شد.", "عملیات حذف")
            }, 50)
            setTimeout(function () { window.location.reload() }, 1890)
            break;
        case 4:
            setTimeout(function () {
                toastr.options = {
                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
                    "positionClass": "toast-top-full-width",
                    "progressBar": true,
                    "newestOnTop": true,
                    "closeButton": false,
                    "preventDuplicates": false,
                    "debug": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "1000",
                    "extendedTimeOut": "3000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                toastr["error"]("لطفاً با مدیر سیستم تماس بگیرید.", "خطای انجام عملیات")
            }, 50)
            setTimeout(function () { window.location.reload() }, 1890)
            break;
        case 5:
            setTimeout(function () {
                toastr.options = {
                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
                    "positionClass": "toast-top-full-width",
                    "progressBar": true,
                    "newestOnTop": true,
                    "closeButton": false,
                    "preventDuplicates": false,
                    "debug": false,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "1000",
                    "extendedTimeOut": "3000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
                toastr["warning"]("اطلاعات وارد شده تکراریست.", "خطای انجام عملیات")
            }, 50)
            setTimeout(function () { window.location.reload() }, 1890)
            break;
    }
}

//var SinglePage = {};
//SinglePage.LoadModal = function () {
//    var url = window.location.hash.toLowerCase();
//    if (!url.startsWith("#showmodal")) {
//        return;
//    }
//    url = url.split("showmodal=")[1];
//    $.get(url,
//        null,
//        function (htmlPage) {
//            $("#ModalContent").html(htmlPage);
//            const container = document.getElementById("ModalContent");
//            const forms = container.getElementsByTagName("form");
//            const newForm = forms[forms.length - 1];
//            $.validator.unobtrusive.parse(newForm);
//            showModal();
//        }).fail(function (error) {
//            setTimeout(function () {
//                toastr.options = {
//                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
//                    "positionClass": "toast-top-full-width",
//                    "progressBar": true,
//                    "newestOnTop": true,
//                    "closeButton": false,
//                    "preventDuplicates": false,
//                    "debug": false,
//                    "onclick": null,
//                    "showDuration": "300",
//                    "hideDuration": "300",
//                    "timeOut": "3000",
//                    "extendedTimeOut": "3000",
//                    "showEasing": "swing",
//                    "hideEasing": "linear",
//                    "showMethod": "fadeIn",
//                    "hideMethod": "fadeOut"
//                }
//                toastr["error"]("لطفاً اطلاعات را بررسی نمایید.", "خطای ثبت اطلاعات")
//            }, 50)

//            setTimeout(function () { window.location.reload() }, 3500)
//        });
//};

//function showModal() {
//    $("#MainModal").modal("show");
//}

//function hideModal() {
//    $("#MainModal").modal("hide");
//}

//$(document).ready(function () {
//    window.onhashchange = function () {
//        SinglePage.LoadModal();
//    };
//    $("#MainModal").on("shown.bs.modal",
//        function () {
//            window.location.hash = "##";
//            $('.persianDateInput').persianDatepicker({
//                format: 'YYYY/MM/DD',
//                autoClose: true
//            });
//        });

//    $(document).on("submit",
//        'form[data-ajax="true"]',
//        function (e) {
//            e.preventDefault();
//            var form = $(this);
//            const method = form.attr("method").toLocaleLowerCase();
//            const url = form.attr("action");
//            var action = form.attr("data-action");

//            if (method === "get") {
//                const data = form.serializeArray();
//                $.get(url,
//                    data,
//                    function (data) {
//                        CallBackHandler(data, action, form);
//                    });
//            } else {
//                var formData = new FormData(this);
//                $.ajax({
//                    url: url,
//                    type: "post",
//                    data: formData,
//                    enctype: "multipart/form-data",
//                    dataType: "json",
//                    processData: false,
//                    contentType: false,
//                    success: function (data) {
//                        CallBackHandler(data, action, form);
//                    },
//                    error: function (data) {
//                        setTimeout(function () {
//                            toastr.options = {
//                                // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
//                                "positionClass": "toast-top-full-width",
//                                "progressBar": true,
//                                "newestOnTop": true,
//                                "closeButton": false,
//                                "preventDuplicates": false,
//                                "debug": false,
//                                "onclick": null,
//                                "showDuration": "300",
//                                "hideDuration": "300",
//                                "timeOut": "3500",
//                                "extendedTimeOut": "3500",
//                                "showEasing": "swing",
//                                "hideEasing": "linear",
//                                "showMethod": "fadeIn",
//                                "hideMethod": "fadeOut"
//                            }
//                            toastr["error"]("لطفاً کلیه ورودی های خواسته شده را تکمیل نمایید.", "خطای ثبت اطلاعات")
//                        }, 50)
//                        setTimeout(function () { window.location.reload() }, 4000)
//                    }
//                });
//            }
//            return false;
//        });
//});

//// Ajax توابع مربوط به ثبت اطلاعات از طریق 
//function CallBackHandler(data, action, form) {
//    switch (action) {
//        case "Message":
//            alert(data.Message);
//            break;
//        case "Refresh":
//            if (data.isSuccedded) {
//                toastr.options = {
//                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
//                    "positionClass": "toast-top-full-width",
//                    "progressBar": true,
//                    "newestOnTop": true,
//                    "closeButton": false,
//                    "preventDuplicates": false,
//                    "debug": false,
//                    "onclick": null,
//                    "showDuration": "300",
//                    "hideDuration": "300",
//                    "timeOut": "3500",
//                    "extendedTimeOut": "3500",
//                    "showEasing": "swing",
//                    "hideEasing": "linear",
//                    "showMethod": "fadeIn",
//                    "hideMethod": "fadeOut"
//                }
//                toastr["success"]("عملیات با موفقیت انجام شد.", "عملیات موفق")
//                setTimeout(function () { window.location.reload() }, 4000)
//            } else {
//                toastr.options = {
//                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
//                    "positionClass": "toast-top-full-width",
//                    "progressBar": true,
//                    "newestOnTop": true,
//                    "closeButton": false,
//                    "preventDuplicates": false,
//                    "debug": false,
//                    "onclick": null,
//                    "showDuration": "300",
//                    "hideDuration": "300",
//                    "timeOut": "3500",
//                    "extendedTimeOut": "3500",
//                    "showEasing": "swing",
//                    "hideEasing": "linear",
//                    "showMethod": "fadeIn",
//                    "hideMethod": "fadeOut"
//                }
//                toastr["warning"]("هنگام ثبت اطلاعات خطایی رخ داده است. لطفاً با مدیر سیستم تماس بگیرید.", "خطای سیستمی")
//                setTimeout(function () { window.location.reload() }, 4000)
//            }
//            break;
//        case "RefereshList":
//            {
//                hideModal();
//                const refereshUrl = form.attr("data-refereshurl");
//                const refereshDiv = form.attr("data-refereshdiv");
//                get(refereshUrl, refereshDiv);
//            }
//            break;
//        case "setValue":
//            {
//                const element = form.data("element");
//                $(`#${element}`).html(data);
//            }
//            break;
//        default:
//    }
//}

//function get(url, refereshDiv) {
//    const searchModel = window.location.search;
//    $.get(url,
//        searchModel,
//        function (result) {
//            $("#" + refereshDiv).html(result);
//        });
//}

//function makeSlug(source, dist) {
//    const value = $('#' + source).val();
//    $('#' + dist).val(convertToSlug(value));
//}

//var convertToSlug = function (str) {
//    var SlugNamaak = '';
//    const trimmed = $.trim(str);
//    SlugNamaak = trimmed.replace(/[^a-z0-9-آ-ی-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
//    return SlugNamaak.toLowerCase();
//};

//function checkSlugDuplication(url, dist) {
//    const SlugNamaak = $('#' + dist).val();
//    const id = convertToSlug(SlugNamaak);
//    $.get({
//        url: url + '/' + id,
//        success: function (data) {
//            if (data) {
//                //sendNotification('error', 'top right', "خطا", "اسلاگ نمی تواند تکراری باشد");
//                toastr.options = {
//                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
//                    "positionClass": "toast-top-full-width",
//                    "progressBar": true,
//                    "newestOnTop": true,
//                    "closeButton": false,
//                    "preventDuplicates": false,
//                    "debug": false,
//                    "onclick": null,
//                    "showDuration": "300",
//                    "hideDuration": "300",
//                    "timeOut": "3500",
//                    "extendedTimeOut": "3500",
//                    "showEasing": "swing",
//                    "hideEasing": "linear",
//                    "showMethod": "fadeIn",
//                    "hideMethod": "fadeOut"
//                }
//                toastr["warning"]("کاربرگرامی: اسلاگ نمی تواند تکراری باشد.", "خطای ثبت داده تکراری")
//            }
//        }
//    });
//}

//function fillField(source, dist) {
//    const value = $('#' + source).val();
//    $('#' + dist).val(value);
//}

//$(document).on("click",
//    'button[data-ajax="true"]',
//    function () {
//        const button = $(this);
//        const form = button.data("request-form");
//        const data = $(`#${form}`).serialize();
//        let url = button.data("request-url");
//        const method = button.data("request-method");
//        const field = button.data("request-field-id");
//        if (field !== undefined) {
//            const fieldValue = $(`#${field}`).val();
//            url = url + "/" + fieldValue;
//        }
//        if (button.data("request-confirm") == true) {
//            if (confirm("آیا از انجام این عملیات اطمینان دارید؟")) {
//                handleAjaxCall(method, url, data);
//            }
//        } else {
//            handleAjaxCall(method, url, data);
//        }
//    });

//function handleAjaxCall(method, url, data) {
//    if (method === "post") {
//        $.post(url,
//            data,
//            "application/json; charset=utf-8",
//            "json",
//            function (data) {
//            }).fail(function (error) {
//                toastr.options = {
//                    // جهت نمایش صحیح هشدار می بایست این پارامتر در ابتدا قرار بگیرد
//                    "positionClass": "toast-top-full-width",
//                    "progressBar": true,
//                    "newestOnTop": true,
//                    "closeButton": false,
//                    "preventDuplicates": false,
//                    "debug": false,
//                    "onclick": null,
//                    "showDuration": "300",
//                    "hideDuration": "300",
//                    "timeOut": "3500",
//                    "extendedTimeOut": "3500",
//                    "showEasing": "swing",
//                    "hideEasing": "linear",
//                    "showMethod": "fadeIn",
//                    "hideMethod": "fadeOut"
//                }
//                toastr["error"]("لطفاً با مدیر سیستم تماس بگیرید.", "خطای سیستمی")
//            });
//    }
//}

//// عملیات بررسی حجم اپلود تصاویر به صورت کلاینت ساید
//jQuery.validator.addMethod("maxFileSize",
//    function (value, element, params) {
//        var size = element.files[0].size;
//        var maxSize = 3 * 1024 * 1024;
//        if (size > maxSize)
//            return false;
//        else {
//            return true;
//        }
//    });
//jQuery.validator.unobtrusive.adapters.addBool("maxFileSize");

//function message(final) {
//    switch (final) {
//        case 1:
//            setTimeout(function () {
//                Swal.fire({
//                    position: 'center',
//                    icon: 'success',
//                    title: 'ثبت اطلاعات انجام شد.',
//                    showConfirmButton: false,
//                    timer: 1800
//                })

//            }, 50)
//            setTimeout(function () { window.location.reload() }, 1890)
//            break;
//        case 2:
//            setTimeout(function () {
//                Swal.fire({
//                    position: 'center',
//                    icon: 'success',
//                    title: 'ویرایش اطلاعات انجام شد.',
//                    showConfirmButton: false,
//                    timer: 1800
//                })

//            }, 50)
//            setTimeout(function () { window.location.reload() }, 1890)
//            break;
//        case 3:
//            setTimeout(function () {
//                Swal.fire({
//                    position: 'center',
//                    icon: 'error',
//                    title: 'اطلاعات حذف شد.',
//                    showConfirmButton: false,
//                    timer: 1800
//                })

//            }, 50)
//            setTimeout(function () { window.location.reload() }, 1890)
//            break;
//        case 4:
//            setTimeout(function () {
//                Swal.fire({
//                    position: 'center',
//                    icon: 'error',
//                    title: 'خطا. با مدیرسیستم تماس بگیرید',
//                    showConfirmButton: false,
//                    timer: 1800
//                })

//            }, 50)
//            setTimeout(function () { window.location.reload() }, 3000)
//            break;
//        case 5:
//            setTimeout(function () {
//                Swal.fire({
//                    position: 'center',
//                    icon: 'error',
//                    title: 'اطلاعات وارد شده تکراریست.',
//                    showConfirmButton: false,
//                    timer: 1800
//                })

//            }, 50)
//            setTimeout(function () { window.location.reload() }, 1890)
//            break;
//    }
//}
//function RelodeCategory() {
//    $.ajax({
//        url: "/Administrator/Product/GetAllCategory",
//        type: "GET",
//        dataType: "json",
//        processData: false,
//        contentType: false,
//        success: function (data) {
//            $('.option-cate').remove();
//            data.forEach(function (item) {
//                $('.listcate').append($("<option class='option-cate'></option>").val(item.categoryId).html(item.faTitle));
//                $('.listcate').first().click();
//            });
//            $(".select2-selection > .option-cate").remove();
//        }
//    });
//}