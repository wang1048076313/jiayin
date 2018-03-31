/**
 * Created by wang on 2017/10/11.
 */
function toTop() {
    var speed = 500;//滑动的速度
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
}
$(function () {
    /*加载wow页面动画*/
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }

        $(window).on('scroll',function () {
            $('.top').css('opacity', 1 - $(window).scrollTop() / 500);
            if($('.top').css('opacity')<=0){
                $('.top').hide()
            }else{
                $('.top').show()
            }

            if($(window).scrollTop()<$(window).height()){
                $('.topball').hide()
            }else{
                $('.topball').show()
            }
        });

        if ($(window).width() > 1100) {
            $(".sidebar").show();
        } else {
            $(".sidebar").hide();
        }

        $(".nav li").hover(function () {
            $(this).find('.nav_list').stop().slideDown(200)
        }, function () {
            $(this).find('.nav_list').stop().slideUp(200)
        })

    //产品与解决方案
    $(".product2 .hd li").click(function () {
        $(this).siblings("li").removeClass("on");
        $(this).addClass("on");
        loadhtml();
    })

    setTimeout(function () {
        $(".product2 .hd li em").each(function () {
            if ($(this).text() != "（0）") {
                $(this).parents("li").click();
                $(this).parents("li").siblings("li").removeClass("on");
                $(this).parents("li").addClass("on");
                return false;
            }
        })
    }, 1);

    // 动画
    $(".product2 .bd li").hover(function () {
        $(this).find('a').addClass('animated zoomIn on');
    }, function () {
        $(this).find('a').removeClass('zoomIn on');
    });


});