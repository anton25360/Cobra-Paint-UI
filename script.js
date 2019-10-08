
generateCanvas(60, 100)




function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas = canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas

}

document.querySelector('html').addEventListener('mousedown', function () {
    clickdown = true
})

document.querySelector('html').addEventListener('mouseup', function () {
    clickdown = false
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

document.querySelector('.canvas').addEventListener('mouseleave', function () {
    painting = false
})

document.querySelector('.canvas').addEventListener('mouseenter', function () {
    if (clickdown === true) {
        painting = true
    }
})

