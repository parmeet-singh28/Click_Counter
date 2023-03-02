const c = document.getElementById('count')

function decrease() {
    let val = Number(c.textContent);
    val = val - 1;
    c.textContent = val;
}
function reset() {
    c.textContent = 0;
}
function increase() {
    let val = Number(c.textContent);
    val = val + 1;
    c.textContent = val;
}