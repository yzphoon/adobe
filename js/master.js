const isMobile = $(window).width()<=480;
const $grid = $('#Grid')

console.log ('isMobil = ' + isMobile);

function setGrid() {
    if (isMobile) {
        $grid.addClass('grid-2');
        return;
    } 
    $grid.addClass('grid-3');
}

setGrid();


$(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
        $('#Nav').removeClass('nav-active');
        return;
    }
    $('#Nav').addClass('nav-active');
});