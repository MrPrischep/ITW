const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const prednasky = document.querySelector('.prednasky');
const slides = document.querySelectorAll('.slide');
const navElements = document.querySelectorAll('.navElem');

/* SLIDER */
let activeSlide = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up');
});

downButton.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
})

function changeSlide(direction) {

    if (direction === 'up') {
        activeSlide++;

        if (activeSlide === slidesCount) {
            activeSlide = 0;
        }

    } else if (direction === 'down') {
        activeSlide--;

        if (activeSlide < 0) {
            activeSlide = slidesCount - 1;
        }
        
    }

    const height = prednasky.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;
    sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}

/* CVICENI SLIDES */
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

/* NAVIGATOR */
for (const navElem of navElements) {
    navElem.addEventListener('click', () => {
        clearActiveElement();
        navElem.classList.add('active');
        setTimeout(() => {
            clearActiveElement();
            console.log("hello");
        }, 1000);
    })
}

function clearActiveElement() {
    navElements.forEach((navElem) => {
        navElem.classList.remove('active');
    })
}