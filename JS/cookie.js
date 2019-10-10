document.querySelector('#formSize').addEventListener('submit', function() {
    let value = document.querySelector('input[name="size"]:checked').value;
    document.cookie = "size="+value+"; expires=Thu, 18 Dec 2050 12:00:00 UTC";
})
