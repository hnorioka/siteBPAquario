$(document).ready(function(){
    $('.button').click(function(){
        if($(this).hasClass('expand')){
            $('ul').slideUp(function(){
                $('.button').removeClass('expand');
                $('.fa-solid').removeClass('expand');
            });
        }else{
            $(this).addClass('expand');
            setTimeout(function(){
                $('.fa-solid').addClass('expand');
                $('ul').stop().slideDown();
            }, 200);
        }
    });
});
