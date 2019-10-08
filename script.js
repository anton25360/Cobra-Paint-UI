
let viewportWidth = Math.floor(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.3)

let viewportHeight  = Math.floor(Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.3)


console.log('row:' + viewportWidth)
console.log('column:' + viewportHeight)

generateCanvas(viewportHeight, viewportWidth)

// https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript <- see resource



function generateCanvas(height, width) {

    let canvasWidth = '<div class="pixel"></div>'.repeat(width)

    canvasWidth = '<div class="row">' + canvasWidth + '</div>'

    let canvas = canvasWidth.repeat(height)

    document.querySelector('.canvas').innerHTML = canvas

}