const navElements = document.querySelectorAll('.imagetip');

//console.log(navElements);

for (const navElem of navElements) {
    navElem.addEventListener('click', () => {
        clearActiveElement();
        navElem.classList.add('active');
    })
}

function clearActiveElement() {
    navElements.forEach((navElem) => {
        navElem.classList.remove('active');
    })
}

function mouselog(event) {
    if (event.target.classList.value === "predmet") {
        clearActiveElement();
        navElements[1].classList.add('active');
        navElements[8].classList.add('active');
    } else if (event.target.classList.value === "prednasky") {
        clearActiveElement();
        navElements[2].classList.add('active');
        navElements[9].classList.add('active');
    } else if (event.target.classList.value === "prehled") {
        clearActiveElement();
        navElements[3].classList.add('active');
        navElements[10].classList.add('active');
    } else if (event.target.classList.value === "cviceni") {
        clearActiveElement();
        navElements[4].classList.add('active');
        navElements[11].classList.add('active');
    } else if (event.target.classList.value === "kontakty") {
        clearActiveElement();
        navElements[5].classList.add('active');
        navElements[12].classList.add('active');
    } else if (event.target.classList.value === "souvisle") {
        clearActiveElement();
        navElements[6].classList.add('active');
        navElements[13].classList.add('active');

    } else if (event.target.classList.value === "head"){
        clearActiveElement();
        navElements[0].classList.add('active');
        navElements[7].classList.add('active');
    }
}