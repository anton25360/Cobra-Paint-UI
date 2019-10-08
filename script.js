
generateCanvas(60, 100)




function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas = canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas

}

document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.addEventListener('mousedown', function() {
        painting = true
    })
    pixel.addEventListener('mousemove', function() {
        if (painting === true) {
            this.style.background = "black";
        }
    })
    pixel.addEventListener('mouseup', function() {
        painting = false;
    })
})