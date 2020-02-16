var infoCount = $('#about .container').children().length;


console.log(infoCount);


for (i = 1; i <= infoCount; i++) {

    if (i % 2 == 0) {
        //console.log('zooj left' + i);
        
        $('#about .container .about-block')[i - 1].setAttribute('data-aos', 'fade-right');
        
        
        $('#about .container .about-block').eq(i - 1).addClass('odd');
    
        
        
        
    } else {
        //console.log('fard right'+ i);
        
        $('#about .container .about-block')[i - 1].setAttribute('data-aos', 'fade-left');
        
        
        $('#about .container .about-block').eq(i - 1).addClass('even');
    }

}
