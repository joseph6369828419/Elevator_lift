let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.vehicle-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.vehicle-slider').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider
showSlide(currentSlide);





let currentSlide1 = 0;

function showSlide1(index) {
    const slides1 = document.querySelectorAll('.feature-slide');
    if (index >= slides1.length) {
        currentSlide1 = 0;
    } else if (index < 0) {
        currentSlide1 = slides1.length - 1;
    } else {
        currentSlide1 = index;
    }

    const offset1 = -currentSlide1 * 100;
    document.querySelector('.feature-slider').style.transform = `translateX(${offset1}%)`;
}

function changeSlide1(direction) {
    showSlide1(currentSlide1 + direction);
}

// Initialize the slider
showSlide1(currentSlide1);







let currentSlide2 = 0;

function showSlide2(index) {
    const slides2 = document.querySelectorAll('.client-slide');
    if (index >= slides2.length) {
        currentSlide2 = 0;
    } else if (index < 0) {
        currentSlide2 = slides2.length - 1;
    } else {
        currentSlide2 = index;
    }

    const offset2 = -currentSlide2 * 100;
    document.querySelector('.client-slider').style.transform = `translateX(${offset2}%)`;
}

function changeSlide2(direction) {
    showSlide2(currentSlide2 + direction);
}

// Initialize the slider
showSlide2(currentSlide2);



function toggleMenu() {
    document.body.classList.toggle('menu-opened');
}
