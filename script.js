
generateCanvas(60, 100)



function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column) // canvasRow has a value of (120 * '<div class="pixel"></div>' all in a row)

    canvasRow = '<div class="row">' + canvasRow + '</div>' // canvasRow's value is updated to (120 * '<div class="pixel"></div>' all in a row BUT with '<div class="row">' and '</div>' wrapped around it to make a row div with 120 pixel divs)

    let canvas =  canvasRow.repeat(row) // canvas (new variable) has a value of the row with 120 pixel divs BUT this itself is repeated 60 times)

    document.querySelector('.canvas').innerHTML = canvas

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

document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.addEventListener('mousedown', function() {
        painting = true
        this.style.backgroundColor = "black"
    })
    pixel.addEventListener('mousemove', function() {
        if (painting === true && clickdown === true) {
            this.style.backgroundColor = "black"
        }
    })
    pixel.addEventListener('mouseup', function() {
        painting = false
    })
})








