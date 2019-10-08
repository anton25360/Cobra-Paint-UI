
generateCanvas(280, 500)

// https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript <- see resource

let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

let viewportHeight  = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)



function generateCanvas(row, column) {

    let canvasRow = '<div class="pixel"></div>'.repeat(column)

    canvasRow = '<div class="row">' + canvasRow + '</div>'

    let canvas = canvasRow.repeat(row)

    document.querySelector('.canvas').innerHTML = canvas

}