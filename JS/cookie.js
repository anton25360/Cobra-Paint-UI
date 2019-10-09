document.querySelector('#formSize').addEventListener('submit', function(e) {
    e.preventDefault()
    var value = document.querySelector('input[name="size"]:checked').value;
    document.cookie = value;
    window.location.href = 'canvas.html'
})
