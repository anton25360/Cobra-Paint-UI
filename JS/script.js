
generateCanvas(60, 100)

const canvasColor = '#ffffff'
let paintColor = '#000000'
const colorWheel = '#000000'


setCanvasColor(canvasColor)


document.querySelector('nav #eraser').addEventListener('click', function() {
    paintColor = canvasColor
})

document.querySelector('nav #drawer').addEventListener('click', function() {
    paintColor = colorWheel
})

function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas =  canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas
}

function setCanvasColor(color) {
    document.querySelectorAll('.row .pixel').forEach(function(pixel) {
        pixel.style.backgroundColor = color
    })
    document.querySelector('.canvas').style.backgroundColor = color
}
/*
* The two global events below are designed to ensure that users can
* click elsewhere on the page, and when they drag onto the canvas, the
* paint will be flowing.
* Conversely, if the user unclicks when not on the canvas, the user will
* not be painting when they return the mouse to the canvas unless they
* click again.
*/
let clickdown, painting, mode

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
    if (clickdown) {
        painting = true
    }
})

document.querySelectorAll('.row .pixel').forEach(function(pixel) {
    setTimeout(function() {
        pixel.addEventListener('mousedown', function() {
            if (mode === "paint") {
                painting = true
                this.style.backgroundColor = paintColor
            }
        })
        pixel.addEventListener('mousemove', function() {
            if (mode === "paint" && clickdown === true && painting === true) {
                this.style.backgroundColor = paintColor
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
    drawer.style.backgroundColor = '#a9a9a9'
    eraser.style.backgroundColor = '#ffffff'
    addText.style.backgroundColor = '#ffffff'
    mode = "paint"
})

eraser.addEventListener('click', function() {
    eraser.style.backgroundColor = '#a9a9a9'
    drawer.style.backgroundColor = '#ffffff'
    addText.style.backgroundColor = '#ffffff'
    mode = "paint"
})

addText.addEventListener('click', function() {
    addText.style.backgroundColor = '#a9a9a9'
    drawer.style.backgroundColor = '#ffffff'
    eraser.style.backgroundColor = '#ffffff'
    mode = "text"
})

