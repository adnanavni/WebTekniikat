const pics = [
    {
        thumb: 'https://www.fillmurray.com/100/100',
        big: 'https://www.fillmurray.com/640/480',
    },
    {
        thumb: 'https://lorempixel.com/100/100/sports/1/',
        big: 'https://lorempixel.com//640/480/sports/1/',
    },
    {
        thumb: 'https://placeimg.com/100/100/tech',
        big: 'https://placeimg.com/640/480/tech',
    },
];

const kohde = document.querySelector('ul');

for (const kuva of pics) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = kuva.thumb;
    img.alt = 'Kuvake';
    img.addEventListener('click', function () {
        document.querySelector('div img').src = kuva.big;
        document.querySelector('div').classList.replace('hidden', 'visible');
    })

    li.appendChild(img);
    kohde.appendChild(li);

}

document.querySelector('div').addEventListener('click', function () {
    document.querySelector('div').classList.replace('visible', 'hidden');
});
