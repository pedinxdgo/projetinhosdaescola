/*
Atalho comentário de várias linhas: 
alt + shift + A

Desafio: Criar uma função que receba o preço e desconto em % e
mostre o valor final com desconto.
Criar outra função que receba o preço e quantidade e mostre o valor total da compra.
*/

function calcularDesconto(preco, desconto){
    return preco - (preco * (desconto / 100));
}

function calcularTotal(preco, quantidade){
    return preco * quantidade;
}

const desconto15 = calcularDesconto(200, 15);
const totalCompra = calcularTotal(200, 5);
console.log(desconto15);
console.log(totalCompra);