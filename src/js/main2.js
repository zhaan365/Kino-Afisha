
// popup________________________________________________________

let callBtn = document.querySelectorAll('.call');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.overlay__close');

callBtn.onclick = function () {
    overlay.style.display = 'flex'
};
closeBtn.onclick = function () {
    overlay.style.display = 'none'
};