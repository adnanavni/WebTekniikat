'use strict';

const lomake = document.querySelector('form');

lomake.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const hakusana = document.querySelector('input[name=q]').value;

    fetch('https://api.tvmaze.com/search/shows?q=' + hakusana)
        .then(function (vastaus) {
            return vastaus.json();
        }).then(function (sarjat) {
            sarjojenEsitys(sarjat);
        }).catch(function (error) {
            console.log(error);
        });
});

function sarjojenEsitys(sarjat) {

    console.log(sarjat);

    const main = document.querySelector('main');

    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }

    if (sarjat.length < 1) {
        const error = document.createElement('p');
        error.className = 'error';
        error.textContent = 'Tällä hakusanalla ei löydy sarjoja! :('
        main.appendChild(error);
    }

    for (const sarja of sarjat) {

        if (!sarja) continue

        const article = document.createElement('article');
        article.className = 'article';
        main.appendChild(article);

        const nimi = document.createElement('h2');
        nimi.className = 'nimi'
        nimi.textContent = sarja.show.name;
        article.appendChild(nimi);

        if (sarja.show.image != null) {
            const image = document.createElement('img');
            image.src = sarja.show.image.medium;
            image.alt = sarja.show.name;
            article.appendChild(image);
        } else {
            const image = document.createElement('img');
            image.src = 'imgError.jpg';
            image.alt = 'error';
            article.appendChild(image);
        }

        const genre = document.createElement('p');
        genre.className = 'genre';
        genre.textContent = sarja.show.genres.join(', ')
        article.appendChild(genre);

        const link = document.createElement('a');
        link.className = 'Link'
        link.href = sarja.show.url;
        link.textContent = 'Link';
        article.appendChild(link);

        const summary = document.createElement('div');
        summary.className = 'summary';
        summary.innerHTML = sarja.show.summary;
        article.appendChild(summary);

    }
}