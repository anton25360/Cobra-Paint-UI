
generateCanvas(40, 100)

function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas = canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas

}

let painting
let clickdown

/* 
* The two global events below are designed to ensure that users can 
* click elsewhere on the page, and when they drag onto the canvas, the
* paint will be flowing. 
* Conversely, if the user unclicks when not on the canvas, the user will
* not be painting when they return the mouse to the canvas unless they 
* click again. 
*/

document.querySelector('html').addEventListener('mousedown', function () {
    clickdown = true
})

document.querySelector('html').addEventListener('mouseup', function () {
    clickdown = false
})

document.querySelector('.canvas').addEventListener('mouseleave', function () {
    painting = false
})

document.querySelector('.canvas').addEventListener('mouseenter', function () {
    if (clickdown) {
        painting = true
    }
})

document.querySelectorAll('.pixel').forEach(function(pixel) {
    pixel.addEventListener('mousedown', function() {
        painting = true
        this.style.backgroundColor = "#000000	"
    })
    pixel.addEventListener('mousemove', function() {
        if (painting === true && clickdown === true) {
            this.style.backgroundColor = "#000000	"
        }
    })
    pixel.addEventListener('mouseup', function() {
        painting = false
    })
})


