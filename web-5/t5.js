'use strict';

function liitä(a, b, c) {
    let taulukko = [];
    taulukko.push(a+b+c);
    return taulukko
}

const names = [prompt('Anna nimi'), prompt('Anna nimi'), prompt('Anna nimi')];

alert(liitä(names));