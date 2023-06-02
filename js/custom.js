$(document).ready(function () {
    $('.service_slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.doc_slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.news_slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.testi_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        touchThreshold : 100,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})