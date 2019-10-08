
let canvasDimensions = calculateCanvasDimensions('large')

generateCanvas(canvasDimensions.width, canvasDimensions.height)

function calculateCanvasDimensions(selectedCanvasSize) {

    // https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript <- see resource

    let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    if (selectedCanvasSize === 'small') {

        viewportWidth = Math.floor(viewportWidth * 0.2)

        viewportHeight = Math.floor(viewportHeight * 0.2)

    } else if (selectedCanvasSize === 'large') {

        viewportWidth = Math.floor(viewportWidth * 0.4)

        viewportHeight = Math.floor(viewportHeight * 0.4)

    } else {

        viewportWidth = Math.floor(viewportWidth * 0.3)

        viewportHeight = Math.floor(viewportHeight * 0.3)

    }

    return {width: viewportWidth, height: viewportHeight}

}


function generateCanvas(width, height) {

    let canvasWidth = '<div class="pixel"></div>'.repeat(width)

    canvasWidth = '<div class="row">' + canvasWidth + '</div>'

    let canvas = canvasWidth.repeat(height)

    document.querySelector('.canvas').innerHTML = canvas

}