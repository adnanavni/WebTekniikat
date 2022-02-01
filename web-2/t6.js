'use strict';
const vuosiluku = +prompt('Anna vuosiluku?');

if (vuosiluku % 4 == 0 && (vuosiluku % 100 != 0 || vuosiluku % 400 == 0)) {
    alert('Vuosi on karkausvuosi!');
}
else {
    alert('Vuosi ei ole karkausvuosi!');
}