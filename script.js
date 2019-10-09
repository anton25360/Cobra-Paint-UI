
generateCanvas(60, 100)

let canvasColor = '#ffffff' // default canvas background color
let paintColor = '#000000' // default paint color

setCanvasColor(canvasColor)


document.querySelector('nav .eraser').addEventListener('click', function () {
    paintColor = canvasColor
})


function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas =  canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas

}

function setCanvasColor(color) {
    document.querySelectorAll('.row .pixel').forEach(function (pixel) {
        pixel.style.backgroundColor = color
    })
    document.querySelector('.canvas').style.backgroundColor = color
}


let clickdown

let painting

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
    if (clickdown === true) {
        painting = true
    }
})

document.querySelectorAll('.row .pixel').forEach(pixel => {
    setTimeout(function () {
        pixel.addEventListener('mousedown', function () {
            painting = true
            this.style.backgroundColor = paintColor
        })
        pixel.addEventListener('mousemove', function () {
            if (painting === true && clickdown === true) {
                this.style.backgroundColor = paintColor
            }
        })
        pixel.addEventListener('mouseup', function () {
            painting = false
        })
    }, 0)
})









