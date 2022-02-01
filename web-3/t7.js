'use strict'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const bingonumero = (i) => {
    return 4 * i - random(0, 3)
}

const bingonumerot = []

for (let i = 1; i <= 25; i++) {
    bingonumerot.push(bingonumero(i))
}
document.write(`<p>bingonumerot: ${bingonumerot.join(', ')}</p>`)