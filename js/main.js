var tab = [];
function put (id) {
    b = document.getElementById(id);
    if (b.innerHTML != '=')
        tab.push(b.innerHTML);
    if (b.innerHTML == '=')
        document.getElementById('par').innerHTML = eval(tab.join(''));
    else if (b.innerHTML == 'C')
    {
        tab.splice(0, tab.length);
        document.getElementById('par').innerHTML = '';
    }
    else
        document.getElementById('par').innerHTML = document.getElementById('par').innerHTML + b.innerHTML;
}