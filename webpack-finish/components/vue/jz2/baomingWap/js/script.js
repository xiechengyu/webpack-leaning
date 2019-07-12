$(function() {
    const baoming = $(".baomingWap__boxContent ul");
    const baomingTab = $(".baomingWap__boxTab li");
    const baomingBtn = $(".baomingWap__btn");
    const baomingss = $(".baomingWap__btn--baoming");
    baomingTab.each(function(index) {
        const _this = $(this);
        _this.click(function() {
            _this
                .addClass("active")
                .siblings()
                .removeClass("active");
            baoming
                .eq(index)
                .show()
                .siblings()
                .hide();
            baomingBtn.show();
            baoming
                .eq(index)
                .siblings()
                .find("i")
                .removeClass("active");
            baoming
                .eq(index)
                .siblings()
                .find("i")
                .removeClass("active1");
        });
    });
    baoming.find("li").each(function(index) {
        const _this = $(this);
        _this.click(function() {
            if (_this.hasClass("checkbox")) {
                if (_this.find("i").hasClass("active")) {
                    _this.find("i").removeClass("active");
                } else {
                    _this.find("i").addClass("active");
                }
            } else if (_this.hasClass("radio")) {
                if (_this.find("i").hasClass("active1")) {
                    _this.find("i").removeClass("active1");
                } else {
                    _this
                        .parent()
                        .find("i")
                        .removeClass("active1");
                    _this.find("i").addClass("active1");
                }
            }
        });
    });

    // 报名按钮逻辑
    baomingss.click(function() {
        let arr = [];
        let url =
            "http://wap.wangxiao.cn/Course/ProductsCarts?isfromapp=0&flag=1&productsId=";
        baoming.find("li").each(function() {
            const _this = $(this);
            const data = _this.data("pno");
            if (
                _this.find("i").hasClass("active") ||
                _this.find("i").hasClass("active1")
            ) {
                arr.push(data);
            }
        });
        url = url + arr.join(",");
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(data) {
                if (data.ResultCode === 0) {
                    location.href = "http://wap.wangxiao.cn/Book/ShoppingCart";
                }
            }
        });
    });
});
