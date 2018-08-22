$(document).ready(function(){
        
        
// Portfolio carousel settings =====================  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        autoWidth:true,
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

// Header Slider  =================================
    let elements = [
        $('#first-item'),
        $('#second-item'),
        $('#third-item')

    ];
    let i = 0;
    setSlide();
    $(".item-rst").on('click', ()=>{
        i = 0;
        setSlide();
    });
    $(".item-sec").on('click', ()=>{
        i = 1;
        setSlide();
    });
    $(".item-rth").on('click', ()=>{
        i = 2;
        setSlide();
    });
    function setSlide(){
        switch (i) {
            case 0:
                $('.animationIn').removeClass("animationIn").addClass('animationOut');
                elements[i].removeClass('animationOut').addClass('animationIn');        
                $('.active').removeClass("active");
                $(".item-rst").addClass("active");

                i += 1;
                break;
            case 1:
                $('.animationIn').removeClass("animationIn").addClass('animationOut');
                elements[i].removeClass('animationOut').addClass('animationIn');        
                $('.active').removeClass("active");
                $(".item-sec").addClass("active");

                i += 1;                            
                break;
            case 2:
                $('.animationIn').removeClass("animationIn").addClass('animationOut');
                elements[i].removeClass('animationOut').addClass('animationIn');        
                $('.active').removeClass("active");
                $(".item-rth").addClass("active");
                i = 0;                            
                break;
            default:
                break;
        }
    }
        
          
        
    });

// smooth scrolling ==================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// menu fixed ===========================================
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 600) {
            $('#menu').addClass('fixed-menu');
            $('.label-menu').css("top","20%");
        }else{
            $('#menu').removeClass('fixed-menu');
            $('.label-menu').css("top","2%");                       
        }
    });
// 