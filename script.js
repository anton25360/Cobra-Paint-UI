

let canvasDimensions = calculateCanvasDimensions(document.cookie)

generateCanvas(canvasDimensions.width, canvasDimensions.height)

function calculateCanvasDimensions(selectedCanvasSize) {

    // https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript <- see resource

    let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    if (selectedCanvasSize === 'small') {

        viewportWidth = Math.floor(viewportWidth * 0.05)

        viewportHeight = Math.floor(viewportHeight * 0.05)

    } else if (selectedCanvasSize === 'big') {

        viewportWidth = Math.floor(viewportWidth * 0.075)

        viewportHeight = Math.floor(viewportHeight * 0.075)

    } else { //middle

        viewportWidth = Math.floor(viewportWidth * 0.06)

        viewportHeight = Math.floor(viewportHeight * 0.06)

    }

    return {width: viewportWidth, height: viewportHeight}

}


function generateCanvas(width, height) {

    let canvasWidth = '<div class="pixel"></div>'.repeat(width)

    canvasWidth = '<div class="row">' + canvasWidth + '</div>'

    let canvas = canvasWidth.repeat(height)

    document.querySelector('.canvas').innerHTML = canvas

}

let painting
let clickdown

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


