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

function sarjojenEsitys(s) {
    console.log(s);

    for (let i = 0; i <= s.length; i++) {
        let sarja = s[i];

        const main = document.querySelector('main');

        const article = document.createElement('article');
        article.className = 'article';
        main.appendChild(article);

        const nimi = document.createElement('h2');
        nimi.textContent = sarja.show.name;
        article.appendChild(nimi);

        if (sarja.show.image != null) {
            const image = document.createElement('img');
            image.src = sarja.show.image.medium;
            article.appendChild(image);
        } else {
            const image = document.createElement('img');
            image.src = 'imgError.jpg';
            article.appendChild(image);
        }

        const genre = document.createElement('p');
        genre.textContent = sarja.show.genres.join(', ')
        article.appendChild(genre);

        const link = document.createElement('a');
        link.href = sarja.show.url;
        link.textContent = 'linkki';
        article.appendChild(link);

        const summary = document.createElement('div');
        summary.innerHTML = sarja.show.summary;
        article.appendChild(summary);

    }
}

function poistaArticlet() {
    const poista = document.getElementsByClassName('article');
    poista.remove();
}