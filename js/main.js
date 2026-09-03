function fadeAnime() {

    $('.aboutcafetitle,.menus,.menutitle,.newstitle,#banner,#contact h3,.access-text h2,.access-text h3').each(function () {

        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });
}

$(window).on('scroll', fadeAnime);



$(".pagetop").click(function () {

    const sound = $("#windSound")[0];

    // 最初から再生
    sound.pause();
    sound.currentTime = 0;
    sound.volume = 1;
    sound.play();

    // 1.5秒後からフェードアウト開始
    setTimeout(function () {

        let volume = 1;

        const fade = setInterval(function () {

            volume -= 0.1;

            if (volume <= 0) {
                clearInterval(fade);
                sound.pause();
                sound.currentTime = 0;
                sound.volume = 1;
            } else {
                sound.volume = volume;
            }

        }, 50);

    }, 2000);
})