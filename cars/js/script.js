document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

let carButtons = document.getElementsByClassName("car-button");

for (let i = 0; i < carButtons.length; i++) {
    carButtons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let carInput = document.getElementById("car");

    if (!nameInput.value) {
        alert('Заполните поле "Имя"!');
    } else if (!phoneInput.value) {
        alert('Заполните поле "Телефон"!');
    } else if (!carInput.value) {
        alert('Заполните поле "Автомобиль"!');
    } else {
        alert("Спасибо за заявку! Мы с вами свяжемся!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.9) / 20) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.scrollY) + 'px';
    })
});