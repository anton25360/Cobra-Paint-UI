
generateCanvas(60, 100)

draw('black')

changecolor()



function changecolor() {
    document.querySelector('#colorWheel').addEventListener('input', function (e) {
        let color = e.target.value
        console.log(color)
        draw(color)
    })
}

function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas = canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas

}

function draw(color) {

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



