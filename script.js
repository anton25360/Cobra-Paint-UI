let drawer = document.querySelector('#drawer')
let erasor = document.querySelector('#erasor')

drawer.addEventListener('click', function () {
    drawer.style.backgroundColor = '#a9a9a9'
    erasor.style.backgroundColor = '#ffffff'
})

erasor.addEventListener('click', function () {
    erasor.style.backgroundColor = '#a9a9a9'
    drawer.style.backgroundColor = '#ffffff'
})

