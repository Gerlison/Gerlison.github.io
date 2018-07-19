// Slider Timer
    let elements = [
        $('#first-item'),
        $('#second-item'),
        $('#third-item')

    ];

    $(document).ready(function(){
        
        
        
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav: true,
            // autoWidth:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        });



        
        let i = 0;
        setInterval(()=>{
            switch (i) {
                case 0:
                    elements[i].removeClass('animationIn')                            
                            .addClass('animationOut');

                    elements[i+1].removeClass('animationOut')
                                .addClass('animationIn');

                    i += 1;
                    break;
                case 1:
                    elements[i].removeClass('animationIn')
                            .addClass('animationOut');

                    elements[i+1].removeClass('animationOut')
                                .addClass('animationIn');

                    i += 1;                            
                    break;
                case 2:
                    elements[i].removeClass('animationIn')
                            .addClass('animationOut');

                    elements[0].removeClass('animationOut')
                            .addClass('animationIn');

                    i = 0;                            
                    break;
                default:
                    break;
            }
        }, 35000);
    });

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// menu fixed
$(document).on('scroll', function () {
    if ($(window).scrollTop() > 600) {
        $('#menu').addClass('fixed-menu');
        $('.label-menu').css("top","20%");
    }else{
        $('#menu').removeClass('fixed-menu');
        $('.label-menu').css("top","2%");                       
    }
});