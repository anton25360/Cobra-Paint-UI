document.querySelector('#formSize').addEventListener('submit', function () {

    var value = document.querySelector('input[name="size"]:checked').value;
    console.log(value);
    document.cookie = "size="+value;

    
})
