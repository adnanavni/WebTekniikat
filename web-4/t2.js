'use strict';

const osallistujienMaara = +prompt('Montako osallistujaa on?')
let osallistujat = [];

for(let i = 0; i < osallistujienMaara; i++) {
    osallistujat.push(prompt('Anna osallistujien nimet, paina enteriä välissä.'));
}

document.write('<ol>')

for(let i = 0; i<osallistujienMaara; i++) {
    document.write(`<li> ${osallistujat[i]} <il/>`);
}

document.write(`</ol>`)