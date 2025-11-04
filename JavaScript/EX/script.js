
const botaoHamburguer = document.querySelector('#btn-hamburguer');
const menuMobile = document.querySelector('#menu-mobile');

botaoHamburguer.addEventListener('click', () => {
  menuMobile.classList.toggle('hidden');
});


const gatilhoDropDownWeb = document.querySelector('#gatilho-dropdown-web');
const menuDropDownWeb = document.querySelector('#menu-dropdown-web');
const gatilhoDropDownMobile = document.querySelector('#gatilho-dropdown-mobile');
const menuDropDownMobile = document.querySelector('#menu-dropdown-mobile');

gatilhoDropDownWeb.addEventListener('click', () => {
  e.preventDefault();
  menuDropDownWeb.classList.toggle('hidden');
  menuDropDownMobile.classList.add('hidden');
});

gatilhoDropDownMobile.addEventListener('click', () => {
  e.preventDefault();
  menuDropDownMobile.classList.toggle('hidden');
});

const containerSlides = document.querySelector('#carrossel-slider');
const todosOsSlides = document.querySelectorAll('.slide-carrossel');
const btnAnterior = document.querySelector('#btn-anterior');
const btnProximo = document.querySelector('#btn-proximo');

let slideAtual = 0;
const totalSlides = todosOsSlides.length;

function atualizarCarrossel() {
  containerSlides.style.transform = `translateX(-${slideAtual * 100}%)`;
}

btnAnterior.addEventListener('click', () => {
  slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
  atualizarCarrossel();
});

btnProximo.addEventListener('click', () => {
  slideAtual = (slideAtual + 1) % totalSlides;
  atualizarCarrossel();
});


atualizarCarrossel();
