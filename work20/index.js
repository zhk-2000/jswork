$('#fold>ul>li:first').find('.wrap').css({
    display: 'block'
});

$('#fold>ul>li').cliick(function () {
    $(this).sibling('li').find('.wrap').css({
        display: 'none'
    });
    $(this).find('.wrap').css({
        display: 'block'
    });
});