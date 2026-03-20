function processoPedido(valor, quantidade, operacao){
    return operacao (valor, quantidade);
}

function calcularTotal(preco, qtd){
    return preco * qtd;
}

let resultado = processoPedido(100, 5, calcularTotal);

//imprimir com template string
console.log(`O valor total do pedido é: R$${resultado}`);
