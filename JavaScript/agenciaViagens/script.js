// Menu Hambuguer
const botaohamburguer = document.querySelector('#btn-hamburguer');
const menuMobile = document.querySelector('#menu-mobile');

botaohamburguer.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden");
})

// selecionar os elementos
const gatilhoDropDownWeb = document.querySelector("#gatilho-dropdown-mobile");
const menuDropDownWeb = document.querySelector("#menu-dropdown-web");

// mobile
const menuDropDownMobile = document.querySelector("#menu-dropdown-mobile");
const gatilhoDropDownMobile = document.querySelector("#menu-dropdown-mobile");

// aidivionar eventos de de clickaos gatilhos
gatilhoDropDownWeb.addEventListener("click", (evento) => {
    evento.preventDefault();
    menuDropDownWeb.classList.toggle("hidden");
    menuDropDownMobile.classList.add("hidden");
});

gatilhoDropDownMobile.addEventListener("click", (evento) => {
    evento.preventDefault();
    menuDropDownMobile.classList.toggle("hidden");
    menuDropDownWeb.classList.toggle("hidden");
});

const containerSlides = document.querySelector('#carrossel-slider');
const todosOsSlides = document.querySelectorAll('.slide-carrossel');
const btnAnterior = document.querySelector('#btn-anterior');
const btnProximo = document.querySelector('#btn-proximo');

let slideAtual = 0;
const totalSlides = todosOsSlides.length;

function atualizarCarrossel() {
    const valorTransform = `translateX(-${slideAtual * 100}%)`;
    containerSlides.style.transform = valorTransform;
}

btnAnterior.addEventListener('click', () => {
    slideAtual--;
    if (slideAtual < 0) {
        slideAtual = totalSlides - 1;
    }
    atualizarCarrossel();
});

btnProximo.addEventListener('click', () => {
    slideAtual++;
    if (slideAtual >= totalSlides) {
        slideAtual = 0;
    }
    atualizarCarrossel();
});

atualizarCarrossel();