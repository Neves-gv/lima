function ponto1() {
    var placar = document.querySelector("#pt1");
    var pt1 = Number(placar.innerText);
    pt1++; // incrementa 1 corretamente
    placar.innerText = pt1;
}

function ponto2() {
    var placar = document.querySelector("#pt2");
    var pt2 = Number(placar.innerText);
    pt2++;
    placar.innerText = pt2;
}
function zerar1() {
    var placar = document.querySelector("#pt1");
    var pt1 = Number(placar.innerText);
    pt1 -= 1;
    if (pt1 <= 0) {
        pt1 = 0;
    }
    placar.innerText = pt1;
}
function zerar2() {
    var placar = document.querySelector("#pt2");
    var pt2 = Number(placar.innerText);
    pt2 -= 1;
    if (pt2 <= 0) {
        pt2 = 0;
    }
    placar.innerText = pt2;
}
function zerar3() {
    var placar1 = document.querySelector("#pt1");
    var placar2 = document.querySelector("#pt2");
    placar1.innerText = 0;
    placar2.innerText = 0;
}
// Atividade 2

function ponto1b(ponto) {
    var placar = document.querySelector('#pt3');
    var ponto = Number(placar.innerHTML);
    ponto += ponto;
    placar.innerHTML = ponto;
}
function ponto1b(ponto) {
    var placar = document.querySelector('#pt3');
    var pontoAtual = Number(placar.textContent);
    pontoAtual += ponto;
    placar.textContent = pontoAtual;
}

function ponto2b(ponto) {
    var placar = document.querySelector('#pt4');
    var pontoAtual = Number(placar.textContent);
    pontoAtual += ponto;
    placar.textContent = pontoAtual;
}

function zerar4() {
    var placar1 = document.querySelector("#pt3");
    var placar2 = document.querySelector("#pt4");
    placar1.innerText = 0;
    placar2.innerText = 0;
}