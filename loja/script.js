const produto = {
    "123": {"nome": "Vinicius de Chinelo em dia de Chuva", "preco": 9.99},
    "456": {"nome": "Um Suíno Obeso", "preco": 7.99},
    "789": {"nome": "Um Habitante de São Jorge do Ivaí", "preco": 0.99}
}

let carrinho = [];

const audio = new Audio("bip.mp3");

window.onload = () => {
    document.getElementById("cod").focus();
}

function addProduto() {
    const codValue = document.getElementById("cod");
    const qtdValue = document.getElementById("qtd");

    const codigo = codValue.value;
    const quantidade = qtdValue.value;

    if(!produto[codigo]) {
        AlertItem();
        return;
    }

    const produtoBase = produto[codigo];
    const item ={
        nome: produtoBase.nome,
        preco: produtoBase.preco,
        quantidade: quantidade,
        subtotal: produtoBase.preco * quantidade,
    };

    carrinho.push(item);
    audio.currentTime = 0;
    audio.play();

    atualizarTela();
}
