document.querySelector('#formSize').addEventListener('submit', function() {
    let value = document.querySelector('input[name="size"]:checked').value;
    document.cookie = "size="+value+"; expires=0";
})
