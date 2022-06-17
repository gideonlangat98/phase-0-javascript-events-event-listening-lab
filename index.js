function clickAlert() {
    alert("I was clicked")
}

const input = document.getElementById('input');
function addingEventListener() {
    input.addEventListener('input', clickAlert)
}
addingEventListener();
