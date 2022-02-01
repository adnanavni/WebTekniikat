const kuva = document.getElementById('kuva');
const p = document.querySelector('p');

kuva.addEventListener('mouseenter', () => {
    p.classList.remove('pois');
})

kuva.addEventListener('mouseleave', () => {
    p.classList.add('pois');
})