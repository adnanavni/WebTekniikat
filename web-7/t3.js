'use strict';

const input = document.querySelector('#num');
const button = document.querySelector('#calculate');
const p = document.querySelector('#answer');

function include() {
    if (input.value.toString().includes('*')) {
        return '*';
    } else if (input.value.toString().includes('+')) {
        return '+';
    } else if (input.value.toString().includes('-')) {
        return '-';
    } else if (input.value.toString().includes('/')) {
        return '/';
    }
}

calculate.addEventListener('click', function () {
    const list = input.value.toString().split(include());
    const first = parseFloat(list[0]);
    const second = parseFloat(list[1]);

    switch (include()) {
        case '*':
            p.innerHTML = first * second;
            break;
        case '/':
            p.innerHTML = first / second;
            break;
        case '+':
            p.innerHTML = first + second;
            break;
        case '-':
            p.innerHTML = first - second;
            break;
    }

});