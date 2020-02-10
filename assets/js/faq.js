$(".faq .faq-header").on('click', function (e) {


    //$(".faq").removeClass('faq-active');

    if ($(e.target).parent().hasClass('faq-active')) {

        //alert('its active must remove avtive class');

        $(e.target).parent().removeClass('faq-active');

        $(e.target).parent().find('.faq-body').slideUp();
        
        $(e.target).find('.faq-icon').html('<i class="fa fa-plus"></i>');


    } else {
        //alert('remove all active class and add it to this');
        $(".faq").removeClass('faq-active');
        $('.faq-body').slideUp();
        $('.faq .faq-header .faq-icon').html('<i class="fa fa-plus"></i>');
        
        $(e.target).parent().addClass('faq-active');
        
        $(e.target).parent().find('.faq-body').slideDown();
        
        $(e.target).find('.faq-icon').html('<i class="fa fa-minus"></i>');
    }


});
