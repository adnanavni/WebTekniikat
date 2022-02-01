'use strict';
if(confirm('Lasketaanko neliöjuuri?') == true) {
    const neliojuuri = +prompt('Anna luku?');
    const luku = Math.sqrt(neliojuuri);

    alert('Luvun neliöjuuri: ' + luku);
}
else {
    alert('Neliöjuurta ei lasketa');
}