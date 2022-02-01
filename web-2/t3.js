'use strict';
const sukupuoli = prompt('Mikä on sukupuolesi? (m/n)');
const hemoglobiini = +prompt('Paljonko on hemoglobiini arvosi? (g/l)');

if(sukupuoli == 'm'){
    if(hemoglobiini >= 134 && hemoglobiini<=195) {
        console.log('Hemoglobiini on normaali');
}
    else if(hemoglobiini<134) {
        console.log('Hemoglobiini on alhainen');
}
    else if(hemoglobiini>195) {
        console. log('Hemoglobiini on korkea');
}
}

if(sukupuoli == 'n') {
    if(hemoglobiini >= 117 && hemoglobiini<=175){
        console.log('Hemoglobiini on normaali');
}
    else if(hemoglobiini<117) {
        console.log('Hemoglobiini on alhainen');
}
    else if(hemoglobiini>175) {
        console. log('Hemoglobiini on korkea');
}
}