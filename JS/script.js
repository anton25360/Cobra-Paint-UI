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
        return color
    })
}

function erase() {
    document.querySelector('#eraser').addEventListener('click', function() {
        document.querySelector('#eraser').style.backgroundColor = activeTool
        document.querySelector('#drawer').style.backgroundColor = inactiveTool
        color = '#ffffff'
    })
}

let cookieSizeValue = document.cookie.split('=')[1]
cookieSizeValue = cookieSizeValue.split(';')[0]

let canvasDimensions = calculateCanvasDimensions(cookieSizeValue)

generateCanvas(canvasDimensions.width, canvasDimensions.height)

function calculateCanvasDimensions(selectedCanvasSize) {

    // the window.innerWidth/window.innerHeight properties contain the viewport width (including scroll bars), this
    // is what we need for rescaling, however when using initial-scale (in the meta tag) the values of
    // window.innerWidth/window.innerHeight can wrongly scale down to the 'visual viewport' (i.e. the part of the page
    // the user can see, which may change when scrolling)
    // if window.innerWidth/window.innerHeight is undefined then use 0
    // the document.documentElement.clientWidth/document.documentElement.clientHeight properties contain the viewport
    // width (excluding scroll bars), therefore we want to take the maximum to ensure we either take the
    // viewport width (including scroll bars) or, if not available, the viewport width (excluding scroll bars)

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

let clickdown
let painting = true
let mode = "paint"

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

document.querySelectorAll('.row .pixel').forEach(function(pixel) {
    setTimeout(function() {
        pixel.addEventListener('mousedown', function() {
            if (mode === "paint") {
                painting = true
                this.style.backgroundColor = color
            }
        })
        pixel.addEventListener('mousemove', function() {
            if (mode === "paint" && clickdown === true && painting === true) {
                this.style.backgroundColor = color
            }
        })
        pixel.addEventListener('mouseup', function() {
            painting = false
        })
        pixel.addEventListener('click', function() {
            if (mode === "text") {
                this.innerHTML = '<p class="textInput"></p>'
                this.querySelector(".textInput").contentEditable = "true"
                this.querySelector(".textInput").focus()
            }
        })
    }, 0)
})

let drawer = document.querySelector('#drawer')
let eraser = document.querySelector('#eraser')
let addText = document.querySelector('#addText')

drawer.addEventListener('click', function() {
    color = '#000000'
    drawer.style.backgroundColor = '#a9a9a9'
    eraser.style.backgroundColor = '#ffffff'
    addText.style.backgroundColor = '#ffffff'
    mode = "paint"
    document.querySelector(".canvas").style.cursor = "crosshair"
})

eraser.addEventListener('click', function() {
    eraser.style.backgroundColor = '#a9a9a9'
    drawer.style.backgroundColor = '#ffffff'
    addText.style.backgroundColor = '#ffffff'
    mode = "paint"
    document.querySelector(".canvas").style.cursor = "crosshair"
})

addText.addEventListener('click', function() {
    addText.style.backgroundColor = '#a9a9a9'
    drawer.style.backgroundColor = '#ffffff'
    eraser.style.backgroundColor = '#ffffff'
    mode = "text"
    document.querySelector(".canvas").style.cursor = "text"
})