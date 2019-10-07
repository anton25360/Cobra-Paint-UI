
generateCanvas(250, 400)




function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas = canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas

}