const hamburgerBtn = document.getElementById('hamburger-btn');
const modifyBox = document.getElementById('modify-box');

const hidden = 'hidden';
hamburgerBtn.addEventListener('click',function() {
    if(modifyBox.classList.contains(hidden)) {
        modifyBox.classList.remove(hidden);
    }
    else {
        modifyBox.classList.add(hidden);
    }
})