'use strict';

function suurin(eka, toka, kolmas) {
    if(eka >= toka && eka >= kolmas) return eka;
    else if(toka >= kolmas && toka >= eka) return toka;
    else if(kolmas >= eka && kolmas >= toka) return kolmas;
}

const luvut = [+prompt('Anna eka luku'), +prompt('Anna toka luku'), +prompt('Anna kolmas luku')];

alert('Luvuista suurin: ' + suurin(...luvut));