const isMobile = $(window).width() <= 480;
const $grid = $('#Grid');
const $nav = $('#Nav')


console.log('isMobil = ' + isMobile);

function setGrid() {
    if (isMobile) {
        $grid.addClass('grid-2');
        return;
    }
    $grid.addClass('grid-3');
}

function setScroll() {
    $(window).scroll(function () {
        if (isMobile) {
            if ($(window).scrollTop() <= 20) {
                $nav.removeClass('nav-active');
                return;
            }
            $nav.addClass('nav-active');
        }
    });
}

function setInit() {
    setGrid();
    //其他載入畫面的函式庫
}

function setEvent() {
    setScroll();
    //其他事件的函式庫
}

setInit();
setEvent();

// $(window).scroll(function () {
//     if (!isMobile) return;
    
//     if ($(this).scrollTop() <= 20) {
//         $nav.removeClass('nav-active');
//         return;
//     }
//     $nav.addClass('nav-active');
// });