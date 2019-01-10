var anterior = 4, atual = 0, proximo = 1;

/** Funcao especifica para este caso, porém, existe
 *  a possibilidade de torna-la generica */
function alterarStatus(acao) {
    
    if(acao == 1){
        anterior++;
        atual++;
        proximo++;

        if(anterior > 4){
            anterior = 0;
        }

        if(atual > 4) {
            atual = 0;
        }

        if(proximo > 4) {
            proximo = 0;
        }

    }else{
        anterior--;
        atual--;
        proximo--;

        if(anterior < 0){
            anterior = 4;
        }

        if(atual < 0) {
            atual = 4;
        }

        if(proximo < 0) {
            proximo = 4;
        }
    }

    return {anterior, atual, proximo};
}

/** Selecionando os elementos necessarios para a interação */
const botaoAvancar = document.querySelector('.control-rigth');
const botaoVoltar = document.querySelector('.control-left');
const imgs = document.querySelectorAll('figure img');
const iconePag = document.querySelectorAll('.paginacao div span');

/** Convertendo NodeLists ou HTMLColletions em arrays */
const arrayImgs = [...imgs];
const arrayIconePag = [...iconePag];

/* Evento para avançar o slide com click no botao direito */
botaoAvancar.onclick = function() {
    let status = alterarStatus(1);

    arrayImgs[status.anterior].classList.remove('img-ativa');
    arrayImgs[status.atual].classList.add('img-ativa');

    arrayIconePag[status.anterior].classList.remove('ativo');
    arrayIconePag[status.atual].classList.add('ativo');
}

/* Evento para retroceder o slide com click no botao esquerdo */
botaoVoltar.onclick = function() {
    let status = alterarStatus(0);

    arrayImgs[status.proximo].classList.remove('img-ativa');
    arrayImgs[status.atual].classList.add('img-ativa');

    arrayIconePag[status.proximo].classList.remove('ativo');
    arrayIconePag[status.atual].classList.add('ativo');
}

// Funçoes responsáveis por realizar uma pausa do temporizador do slider
// quando o mouse está sobre o mesmo
var temp;
let start = () => {
    temp = setInterval(() => {
        let status = alterarStatus(1);
    
        arrayImgs[status.anterior].classList.remove('img-ativa');
        arrayImgs[status.atual].classList.add('img-ativa');
    
        arrayIconePag[status.anterior].classList.remove('ativo');
        arrayIconePag[status.atual].classList.add('ativo');
    },3000);
}

start();

const areaSlider = document.querySelector('.slider');
areaSlider.addEventListener('mouseover', () => {
    clearInterval(temp);
});

areaSlider.addEventListener('mouseleave', () => {
    start();
});