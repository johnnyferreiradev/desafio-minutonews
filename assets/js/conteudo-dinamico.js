const noticias = [
    {
        tema: 'Esporte',
        id: 1,
        noticias: {
            foto: '1.jpg',
            titulo: 'Consumo de chocolate e depressão estão associados.',
            texto: 'Sint dolor consequat occaecat non aliqua non adipisicing id. Lorem Lorem anim quis incididunt laboris consequat sunt id. Ad laborum magna ad.',
            dataPublicacao: '06-01-2015'
        }
    },
    {
        tema: 'País',
        id: 2,
        noticias: {
            foto: '2.jpg',
            titulo: 'Homens e seus cães',
            texto: 'Esse enim ad reprehenderit velit consectetur non eu deserunt. Commodo nostrud nulla dolore aliqua. Nisi excepteur ex dolore labore fugiat id. ',
            dataPublicacao: '24-04-2014'
        }
    },
    {
        tema: 'Cultura',
        id: 3,
        noticias: {
            foto: '8.jpg',
            titulo: 'O Parque das Esculturas, um museu a céu aberto em Pernambuco',
            texto: 'Velit magna velit non nulla est culpa dolore duis. Laboris nostrud pariatur cillum voluptate duis eu non ex tempor velit. Amet incididunt.',
            dataPublicacao: '13-01-2015'
        }
    },
    {
        tema: 'Internacional',
        id: 4,
        noticias: {
            foto: '7.jpg',
            titulo: 'Os Simpsons protagonizam versão do Harlem Shake.',
            texto: 'Qui irure qui nostrud et nisi. Mollit laboris nostrud aliqua sit cillum culpa duis adipisicing ex et magna do. Labore irure. ',
            dataPublicacao: '13-01-2014'
        }
    },
    {
        tema: 'Rio',
        id: 5,
        noticias: {
            foto: '2.jpg',
            titulo: 'Formigas atacam NY nessa manha',
            texto: 'Esse enim ad reprehenderit velit consectetur non eu deserunt. Commodo nostrud nulla dolore aliqua. Nisi excepteur ex. ',
            dataPublicacao: '05-04-2014'
        }
    },
    {
        tema: 'Politica',
        id: 6,
        noticias: {
            foto: '4.jpg',
            titulo: 'Escovar os dentes é essencial para manter-se saudável',
            texto: 'Velit magna velit non nulla est culpa dolore duis. Laboris nostrud pariatur cillum voluptate duis eu non ex tempor velit.',
            dataPublicacao: '01-07-2017'
        }
    }
];

function carregarDados(card, indice) {

    let data = document.querySelector(`${card} .card-cabecalho span`);
    let tema = document.querySelector(`${card} .card-cabecalho h5`);
    let imagem = document.querySelector(`${card} .card-img img`);
    let titulo = document.querySelector(`${card} .card-conteudo h4`);
    let conteudo = document.querySelector(`${card} .card-conteudo p`);

    let img = 'Imagens/Notícias/' + noticias[indice].noticias.foto;

    data.innerHTML = noticias[indice].noticias.dataPublicacao;
    tema.innerHTML = noticias[indice].tema;
    imagem.src = img;
    titulo.innerHTML = noticias[indice].noticias.titulo;
    conteudo.innerHTML = noticias[indice].noticias.texto;
}

function inserirValoresPadroes() {

    for (let i = 0; i < 6; i++) {

        let data = document.querySelector(`.card${i + 1} .card-cabecalho span`);
        let tema = document.querySelector(`.card${i + 1} .card-cabecalho h5`);
        let imagem = document.querySelector(`.card${i + 1} .card-img img`);
        let titulo = document.querySelector(`.card${i + 1} .card-conteudo h4`);
        let conteudo = document.querySelector(`.card${i + 1} .card-conteudo p`);

        let img = 'Imagens/Notícias/' + noticias[i].noticias.foto;

        data.innerHTML = noticias[i].noticias.dataPublicacao;
        tema.innerHTML = noticias[i].tema;
        imagem.src = img;
        titulo.innerHTML = noticias[i].noticias.titulo;
        conteudo.innerHTML = noticias[i].noticias.texto;
    }
}

function inserirDadosOrdenadosTema() {
    const temas = [];

    for (let i = 0; i < noticias.length; i++) {
        temas.push(noticias[i].tema);
    }

    const temasOrdemAlfabetica = temas.sort();

    var card;
    for (let i = 0; i < temasOrdemAlfabetica.length; i++) {
        for (let j = 0; j < temasOrdemAlfabetica.length; j++) {
            if (temasOrdemAlfabetica[i] == noticias[j].tema) {
                card = `.card${i + 1}`;
                carregarDados(card, j);
            }
        }
    }
}

// Implementação de um replace que funcina para todos os elementos encontrados
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

// Funções que auxiliam a função converterDatas, de forma que são realizadas as conversões necessarias
const dividirString = (elem) => elem.split('-');
const organizarArray = (array) => {
    let novoArray = [];
    let j = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        novoArray[j] = array[i];
        j--;
    }

    return novoArray;
}
const unirString = array => array[0] + array[1] + array[2];

// Função responsável por montar um array de strings com valores de datas no formato aa-mm-dd
function converterDatas() {
    const datas = [];
    for (let i = 0; i < noticias.length; i++) {
        let data = noticias[i].noticias.dataPublicacao;
        let resultado = unirString(organizarArray(dividirString(data)));
        datas.push(resultado);
    }
    return datas;
}

function inserirDadosOrdenadosData() {
    let datas = converterDatas();
    datas.sort(function (a, b) { return b - a }); // Ordenar na forma decrescente

    var datasObj = [];
    for (let i = 0; i < datas.length; i++) {
        let dataPublicacao = unirString(organizarArray(dividirString(noticias[i].noticias.dataPublicacao)));
        datasObj.push(dataPublicacao);
    }

    var card;
    for (let i = 0; i < datas.length; i++) {
        for (let j = 0; j < datas.length; j++) {
            if (datas[i] == datasObj[j]) {
                card = `.card${i + 1}`;
                carregarDados(card, j);
            }
        }
    }
}

function esconderConteudo(tag) {
    document.querySelectorAll(tag).forEach((e) => {
        e.style.display = 'none';
    })
}

function mostrarConteudo(tag) {
    document.querySelectorAll(tag).forEach((e) => {
        e.style.display = 'block';
    })
}

function filtrarPor(elem) {
    esconderConteudo('.card');
    const temas = [];

    for (let i = 0; i < noticias.length; i++) {
        temas.push(noticias[i].tema);
    }

    const cards = document.querySelector('.cards');
    cards.style.height = '200%';

    for (let i = 0; i < temas.length; i++) {
        if (temas[i] == elem) {
            mostrarConteudo('.card1');
            carregarDados('.card1', i);
        }
    }

    if (elem == 'default') {
        cards.style.height = '100%';
        let result = selectOrder.options[selectOrder.selectedIndex].value;

        if (result == 'tema') {
            inserirDadosOrdenadosTema();
        } else if (result == 'data') {
            inserirDadosOrdenadosData();
        }
        mostrarConteudo('.card');
    }
}

// Script que captura a mudança do select e aplica a ordenação e filtro
const selectOrder = document.querySelector('.order');
const selectFilter = document.querySelector('.filter');

function aplicarMudancasOrder() {
    return selectOrder.options[selectOrder.selectedIndex].value;
}

function aplicarMudancasFilter() {
    return selectFilter.options[selectFilter.selectedIndex].value;
}

selectOrder.onchange = () => {
    let result = aplicarMudancasOrder();
    let result2 = aplicarMudancasFilter();

    if(result2 == 'default'){
        if (result == 'tema') {
            inserirDadosOrdenadosTema();
        } else if (result == 'data') {
            inserirDadosOrdenadosData();
        }
    }
}

selectFilter.onchange = () => {
    let result = aplicarMudancasFilter();
    filtrarPor(result);
}

inserirValoresPadroes();












