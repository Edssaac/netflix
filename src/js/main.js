$('nav a').on('click', (e) => {
    $('nav a').removeClass('selected');
    $(e.target).addClass('selected');
});

let videoLink = 'https://www.youtube.com/watch?v=CwXOrWvPBPk';
let infoLink = 'https://pt.wikipedia.org/wiki/Shrek';

$('#watch-button').on('click', () => {
    window.open(videoLink);
});

$('#information-button').on('click', () => {
    window.open(infoLink);
});

const startOwlCarousel = () => {
    let owl = $('.owl-carousel');

    owl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }

        e.preventDefault();
    });
}

const createCards = (movies) => {
    let cards = '';

    for (let movie in movies) {
        cards += `<div class="item">
            <img id="${movie}" class="movie-box" src="src/img/covers/${movie}.jpg" alt="${movies[movie].title}">
        </div>`;
    }

    $('#movieBox').html(cards);

    startOwlCarousel();
}

$(document).ready(async () => {
    const movies = await fetch('src/js/data.json')
        .then(response => response.json())
        .then(data => { return data; })
        .catch(() => { return []; });

    createCards(movies);

    $('.movie-box').on('click', (e) => {
        let movie = movies[e.target.id];

        $('#title').text(movie.title);
        $('#description').text(movie.description);
        $('#main-movie').css('backgroundImage', `url('src/img/banners/${e.target.id}.jpg')`);

        videoLink = movie.video;
        infoLink = movie.info;
    });

    if (Object.keys(movies).length) {
        let randomMovie = Math.floor(Math.random() * Object.keys(movies).length);

        $('.movie-box')[randomMovie].click();
    }
});