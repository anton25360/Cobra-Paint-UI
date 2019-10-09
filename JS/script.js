
generateCanvas(60, 100)

draw('#000000')

clickColor()

changeColor()

erase()


function clickColor() {
    document.querySelector('#drawer').addEventListener('click', function () {
        document.querySelector('#eraser').style.backgroundColor = '#ffffff'
        document.querySelector('#drawer').style.backgroundColor = '#a9a9a9'
    })
}



function changeColor() {
    document.querySelector('#colorWheel').addEventListener('input', function(e) {
        let color = e.target.value
        draw(color)
    })
}

function erase() {
    document.querySelector('#eraser').addEventListener('click', function() {
        document.querySelector('#eraser').style.backgroundColor = '#a9a9a9'
        document.querySelector('#drawer').style.backgroundColor = '#ffffff'
        draw('#ffffff')
    })
}

function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas = canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas

}

function draw(color) {

    document.querySelector('html').addEventListener('mousedown', function() {
        clickdown = true
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
            this.style.backgroundColor = color
        })
        pixel.addEventListener('mousemove', function() {
            if (painting === true && clickdown === true) {
                this.style.backgroundColor = color
            }
        })
        pixel.addEventListener('mouseup', function() {
            painting = false
        })
    })
}