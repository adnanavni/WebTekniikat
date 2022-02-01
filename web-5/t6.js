'use strict'

const vastaluvuksi = (a) => console.log(a.map((n) => n * -1))
const luvut = [+prompt('Anna eka luku'), +prompt('Anna toka luku'), +prompt('Anna kolmas luku')];
vastaluvuksi(luvut);