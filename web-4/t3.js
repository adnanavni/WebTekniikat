'use strict';

let koirat = [];

for(let i = 0; i < 6; i++) {
    koirat.push(prompt('Anna koirien nimet, paina enteriä välissä.'));
}

document.write('<ul>');

koirat.sort().reverse();

for(let i = 0; i < 6; i++) {
    document.write(`<li> ${koirat[i]} </li>`);
}

document.write(`</ul>`);