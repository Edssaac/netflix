var owl = $('.owl-carousel');

owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.originalEvent.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

function seletor(selected)
{
    var links = document.querySelectorAll('nav a');

    for ( link of links )
    {
        if ( link.text == selected.text )
        {
            link.classList.add('selected')
        }
        else
        {
            link.classList.remove('selected')
        }
    }
}