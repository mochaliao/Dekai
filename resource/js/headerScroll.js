$(window).scroll(function(){
    var scrollAction = $(window).scrollTop();
    var height = $("header").outerHeight();

    if( scrollAction > height){
        $("header").addClass("fixed");
    }
    else {
        $("header").removeClass("fixed");
    }
})

