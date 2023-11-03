const elements = document.querySelectorAll('.reveal')

function isVisible() {

    elements.forEach(element => {
        const {top, bottom} = element.getBoundingClientRect();

        if (bottom > window.innerHeight || top < 0) {
            element.classList.remove('reveal_active')
        } else {
            element.classList.add('reveal_active');
        }       
    });    
}

document.addEventListener('scroll', isVisible)

