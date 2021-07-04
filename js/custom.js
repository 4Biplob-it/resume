
        //Typed Js
        var typed =new Typed('.my-name', {
            strings:['Biplob Hossain'],
            loop:true,
            typeSpeed:50,
            backSpeed:50
        });
        var typed =new Typed('.designation', {
            strings: ['Web Developer'],
            loop:true,
            typeSpeed:50,
            backSpeed:50,
            
        });

        
        // init Isotope
        var $grid = $('.portfolio-items').isotope({
            // options
            });
            // filter items on button click
            $('.portfolio-menu').on( 'click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
            // filter items on button active
            $('.portfolio-menu').on( 'click', 'li', function() {
                $(this).addClass('active').siblings().removeClass('active');
            });
        // One Page Nav
        $('#nav').onePageNav();
        
        // Slick Nav
        $(window).on('scroll', function(){
            if ($(this).scrollTop() > 20){
                $('.header-area').addClass("sticky");
                $('#scrolltop').fadeIn();
            }
            else {
                $('.header-area').removeClass("sticky");
                $('#scrolltop').fadeOut();
            }
        });
        
        $('#scrolltop').click(function(){
            $('html, body').animate({
                scrollTop:0
            }, 3000);
        });