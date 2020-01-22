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
                            $(this).slick("slickNext");
                            startProgressbar();
                        } else {
                            $(this).slick("slickPrev");
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



            var menu = function () {
                var menuBtn = $("#menuBtn");
                var overlayView = $('#overlayView');
                var btn = $('#btnShow');
                btn.on('click', function () {
                    if (overlayView.hasClass('show')) {
                        overlayView.removeClass('show');
                        overlayView.addClass('hide');

                        menuBtn.removeClass('hidden');
                        menuBtn.addClass('block');

                    } else {
                        overlayView.removeClass('hide');
                        overlayView.addClass('show');

                        menuBtn.removeClass('block');
                        menuBtn.addClass('hidden');
                    }
                });

                //for sideNav
                menuBtn.on("click", function () {
                    overlayView.addClass('show');
                    menuBtn.removeClass('block');
                    menuBtn.addClass('hidden');
                });
            };


            (function ssInit() {
                menu();
                slider();
            })();
        })(jQuery);