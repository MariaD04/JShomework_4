const rotators = Array.from(document.querySelectorAll('.rotator__case'));

function isVisible() {
    let index = rotators.findIndex((rotator) => rotator.classList.contains('rotator__case_active'));
    rotators[index].classList.remove('rotator__case_active');
    index < rotators.length - 1 ? index++ : index = 0;
    rotators[index].classList.add('rotator__case_active');
    rotators[index].style.color = rotators[index].dataset.color;
    let speed = rotators[index].dataset.speed;
    setTimeout(isVisible, speed);
}

isVisible();


/*const rotators = Array.from(document.querySelectorAll('.rotator__case'));

function isVisible() {
    let index = rotators.findIndex((rotator) => rotator.classList.contains('rotator__case_active'));
    rotators[index].classList.remove('rotator__case_active');
    index < rotators.length - 1 ? index++ : index = 0;
    rotators[index].classList.add('rotator__case_active');
}

setInterval(isVisible, 1000);*/
