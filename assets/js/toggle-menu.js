$('#toggle-menu').on('click', function () {
    $('.main-menu').slideToggle();
});


$(document).ready(function () {


    let aboutBlock = $('#about .container').children();


    for (i = 0; i < aboutBlock.length; i++) {
        if (i % 2 != 0) {
            aboutBlock[i - 1].setAttribute('data-aos', 'fade-left');

            aboutBlock[i - 1].setAttribute('class', 'aos-init');


            aboutBlock[i - 1].setAttribute('class', 'about-block');
        } else {

        }
    }
});
