'use strict';
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
  const html = `<li><img src="${kuva.thumb}" alt="Kuvake"></li>`;
  kohde.innerHTML += html;
}

const kuvakkeet = document.querySelectorAll('li img');

for (const [i, kuvake] of kuvakkeet.entries()) {
  kuvake.addEventListener('click', function () {
    document.querySelector('div img').src = pics[i].big;
    document.querySelector('div').classList.replace('hidden', 'visible')
  });
}

document.querySelector('div').addEventListener('click', function () {
  document.querySelector('div').classList.replace('visible', 'hidden');
});
