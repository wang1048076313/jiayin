$(function () {
   

});


function no_pic(qthis) {
    /// <summary>
    ///【函数名】img标签 onerror事件调用

    /// </summary>
    qthis.src = SiteUrl + "/images/logo.png";
    qthis.onerror = null; //控制不要一直跳动
}

function no_avatar(_this) {
    /// <summary>
    ///【函数名】img标签 onerror事件调用

    /// </summary>
    _this.src = SiteUrl + "/images/nopepole.png";
    _this.onerror = null; //控制不要一直跳动
}



function showuploadimg(_upload, _img) {
    /// <summary>
    /// file控件即时显示图片
    /// </summary>
    /// <param name="_upload">file控件ID</param>
    /// <param name="_img">img控件id</param>
    /// <returns></returns>

    $("#" + _upload).change(function () {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#" + _img);
        if (fileObj && fileObj.files && fileObj.files[0]) {
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src', dataURL);
        } else {
            dataURL = $file.val();
            var imgObj = document.getElementById(_img);
            // 两个坑:
            // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
            // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
        }
    });
}


function isMobile(_mobile) {
    /// <summary>
    /// Description.校验手机号格式
    /// </summary>
    /// <param name="_mobile">The mobile.校验手机号</param>
    /// <returns>bool:true|false</returns>

    if (!(/^1(3|4|5|7|8)\d{9}$/.test(_mobile))) {
        return false;
    }
    return true;
}