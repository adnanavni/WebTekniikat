'use strict';

function muunnos(lasku) {
    lasku *= 3.785;
    return lasku;
}

const gallonat = +prompt('Anna gallonat');

alert(muunnos(gallonat));