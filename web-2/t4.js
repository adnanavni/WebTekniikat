'use strict';
let lompakko = +prompt('Paljonko sinulla on rahaa?');
const bussilippu = +prompt('Paljonko bussilippu maksaa?');

if(lompakko>=bussilippu) {
    lompakko-=bussilippu;
    alert('Hyvää matkaa!');
}
else {
    alert('Rahasi eivät valitettavasti riitä');
}

alert('Sinulle jäi: ' + lompakko + ' euroa');