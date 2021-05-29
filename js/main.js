var tab = [];
function put (id) {
    b = document.getElementById(id);
    if (b.innerHTML != '=')
        tab.push(b.innerHTML);
    if (b.innerHTML == '=')
        document.getElementById('par').innerHTML = eval(tab.join(' '));
    else
        document.getElementById('par').innerHTML = document.getElementById('par').innerHTML + b.innerHTML;
}