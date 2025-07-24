$(document).ready(function () {

    // overview
    $(".tab_img li:not(:first-child)").hide();
    $(".tab_btn li").click(function () {
        let idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
    });

    // amenities 탭 설정
    $(".tab_content .bath").css("display", "none");
    $(".amenities .tab_btn div").click(function () {
        let tabClass = $(this).hasClass('r_tab') ? 'room' : 'bath';
        $(this).addClass("on").siblings().removeClass("on");

        if (tabClass === 'room') {
            $(".tab_btn .b_tab").removeClass("on");
        } else {
            $(".tab_btn .r_tab").removeClass("on");
        }

        // 슬라이드 효과로 변경하거나 opacity만 변경
        $(".tab_content ." + tabClass).css("opacity", 0).show().animate({ opacity: 1 }, 400);
        $(".tab_content ul").not("." + tabClass).hide();
    });

    $(".dim").hide();
    $(".look").click(function (e) {
        e.preventDefault(); // 링크의 기본 동작 방지
        $(".dim").show(); // dim 요소 표시
    });
    $(".btn_close").click(function () {
        $(".dim").hide(); // dim 요소 숨김
    });
});