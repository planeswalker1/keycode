// User interface (or front-end) logic:
let h1 = document.querySelector('#keycode');

// event listener to change text content of h1 on keydown
window.addEventListener('keydown', function(event) {
    event.preventDefault();
    h1.textContent = event.keyCode;
});
