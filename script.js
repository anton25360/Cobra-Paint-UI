let drawer = document.querySelector('#drawer')
let eraser = document.querySelector('#eraser')

drawer.addEventListener('click', function () {
    drawer.style.backgroundColor = '#a9a9a9'
    eraser.style.backgroundColor = '#ffffff'
})

eraser.addEventListener('click', function () {
    eraser.style.backgroundColor = '#a9a9a9'
    drawer.style.backgroundColor = '#ffffff'
})

