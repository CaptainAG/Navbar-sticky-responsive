$=jQuery;

jQuery(document).ready(function(){


$(".nav-burger").click(function () {
        $(".burger").toggleClass("active");
        $(".nav-responsive").toggleClass("active");
        $("html").toggleClass("block-viewport");
        $("body").toggleClass("block-viewport");
    }); 


$('#nav-burger-animated').click(function () {
        $(this).toggleClass('open');
    });

});