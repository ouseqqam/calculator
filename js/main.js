function put (id) {
    var b = document.getElementById(id);
    b = Number(b);
    console.log(typeof b);
    document.getElementById('par').innerHTML = document.getElementById('par').innerHTML + b;
}