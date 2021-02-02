$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
   
    e.preventDefault();
   });


//   menyimpan parallx

//jumbotron
$(window).scroll(function(){
    let wScroll =$(this).scrollTop();
    // console.log(wScroll)

    $('.jumbotron img').css({
        'transform' : 'translate(0px,'+ wScroll/4+'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px,'+ wScroll/2+'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px,'+ wScroll/1.2+'%)'
    });



});