let color = '#000000'
const activeTool = '#a9a9a9'
const inactiveTool = '#ffffff'

clickColor()

changeColor()

erase()

function clickColor() {
    document.querySelector('#drawer img').addEventListener('click', function () {
        document.querySelector('#eraser').style.backgroundColor = inactiveTool
        document.querySelector('#drawer').style.backgroundColor = activeTool
    })
}

function changeColor() {
    document.querySelector('#colorWheel').addEventListener('input', function(e) {
        color = e.target.value
    })
}

function erase() {
    document.querySelector('#eraser').addEventListener('click', function() {
        document.querySelector('#eraser').style.backgroundColor = activeTool
        document.querySelector('#drawer').style.backgroundColor = inactiveTool
        color = '#ffffff'
    })
}

let canvasDimensions = calculateCanvasDimensions(document.cookie)

generateCanvas(canvasDimensions.width, canvasDimensions.height)

function calculateCanvasDimensions(selectedCanvasSize) {

    let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    if (selectedCanvasSize === 'small') {

        viewportWidth = Math.floor(viewportWidth * 0.05)

        viewportHeight = Math.floor(viewportHeight * 0.05)

    } else if (selectedCanvasSize === 'big') {

        viewportWidth = Math.floor(viewportWidth * 0.075)

        viewportHeight = Math.floor(viewportHeight * 0.075)

    } else {

        viewportWidth = Math.floor(viewportWidth * 0.06)

        viewportHeight = Math.floor(viewportHeight * 0.06)

    }

    return { width: viewportWidth, height: viewportHeight }

}

function generateCanvas(width, height) {

    let canvasWidth = '<div class="pixel"></div>'.repeat(width)

    canvasWidth = '<div class="row">' + canvasWidth + '</div>'

    let canvas = canvasWidth.repeat(height)

    document.querySelector('.canvas').innerHTML = canvas

}

let clickdown, painting

document.querySelector('html').addEventListener('mousedown', function(e) {
    clickdown = true
    e.preventDefault()
})

document.querySelector('html').addEventListener('mouseup', function() {
    clickdown = false
})

document.querySelector('.canvas').addEventListener('mouseleave', function() {
    painting = false
})

document.querySelector('.canvas').addEventListener('mouseenter', function() {

    if (clickdown === true) {

        painting = true
    }
})

document.querySelectorAll('.pixel').forEach(function(pixel) {
    pixel.addEventListener('mousedown', function() {
        painting = true
        pixel.style.backgroundColor = color
    })

    pixel.addEventListener('mousemove', function() {
        if (painting === true && clickdown === true) {
            pixel.style.backgroundColor = color
        }
    })

    pixel.addEventListener('mouseup', function() {
        painting = false
    })
})


