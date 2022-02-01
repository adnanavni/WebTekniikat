// Put code of task C here
const main = document.querySelector('main')

const a = document.createElement('article')
const h = document.createElement('header')
const f = document.createElement('figure')
const p = document.createElement('p')
const h2 = document.createElement('h2')
const image = document.createElement('img')
const caption = document.createElement('figcaption')

h2.textContent = 'Article header'
p.textContent = 'Here is some text. Here is some text. Here is some text. Here is some text.'

image.setAttribute('src', 'http://placekitten.com/320/160')
image.setAttribute('alt', 'title')
caption.textContent = 'Caption'

h.appendChild(h2)
f.appendChild(image)
f.appendChild(caption)

a.appendChild(h)
a.appendChild(f)
a.appendChild(p)

main.appendChild(a)