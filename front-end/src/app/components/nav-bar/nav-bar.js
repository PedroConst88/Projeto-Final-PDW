$(window).on('load',function(){
    $('.dl_link').click(function(){
        var submenu = $(this).parent().children('.dl_sub_dd');
        if (submenu.css('display') == 'none') {
            $('.dl_sub_dd').hide(); //first hide any previously showing submenu's
            submenu.show(); //then show the current submenu
        } else {
            submenu.hide(); //hide the current submenu again
        }
    });
});