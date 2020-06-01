        (function ($) {

            //slider
            var slider = function () {
                $(document).ready(function () {
                    var time = 2;
                    var $bar, $slick, isPause, tick, percentTime;

                    $slick = $(".slider");
                    $slick.slick({
                        // infinite: false,
                        vertical: true,
                        slideToShow: 1,
                        slideToScroll: 1,
                        dots: true,
                        arrows: false,
                        autoplay: true,
                        speed: 2000,
                        autoplaySpeed: 6350
                    });

                    $(".slider").on("wheel", function (e) {
                        e.preventDefault();

                        if (e.originalEvent.deltaY < 0) {
                            $(this).slick("slickPrev");
                            startProgressbar();
                        } else {                        
                            $(this).slick("slickNext");
                            startProgressbar();
                        }
                    });

                    $bar = $(".slider-progress .progress");

                    function startProgressbar() {
                        resetProgressbar();
                        percentTime = 0;
                        isPause = false;
                        tick = setInterval(interval, 30);
                    }

                    function interval() {
                        if (isPause === false) {
                            percentTime += 1 / (time + 0.1);
                            $bar.css({
                                width: percentTime + "%"
                            });
                            if (percentTime >= 100) {
                                $slick.slick("slickNext");
                                startProgressbar();
                            }
                        }
                    }

                    function resetProgressbar() {
                        $bar.css({
                            width: 0 + "%"
                        });
                        clearTimeout(tick);
                    }

                    startProgressbar();

                    $(".slick-next, .slick-prev, .slick-dots").click(function () {
                        startProgressbar();
                    });
                });
            };

            // var menu = function() {
            //     var overlayView = $('#overlayView');              
            //     var content = $('#overlay-content');
            //     overlayView.on('click', function() {
            //         if(overlayView.hasClass('overlay')) {
            //             overlayView.removeClass('overlay', '500');                       
            //             content.hide();
            //             overlayView.addClass('overlay-later', '500');  
            //             $('.slides').removeClass('float-right');                                      
            //         } 
            //         else {
            //             overlayView.removeClass('overlay-later', '500');                       
            //             content.show();
            //             overlayView.addClass('overlay', '500'); 
            //             $('.slides').addClass('float-right');                    
            //         }    
            //     });              
            // };


            var menu = function() {
                var overlay = $('.overlay');
                overlay.on('click', function() {    
                    overlay.toggleClass('background-gray');               
                    overlay.toggleClass('slide');    
                    $('.overlay>.content').toggle('slow');
                    $('.slider-content').toggleClass('sliders');                         
                });
            };


            (function ssInit() {
                menu();
                slider();
            })();
        })(jQuery);