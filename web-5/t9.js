'use strict';

const fibonacci = (n) => {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }

const luku = +prompt('Mones?')

alert(fibonacci(luku));