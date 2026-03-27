let valorCompra = 10;
let desconto;
let descontoOuNao = valorCompra >= 100 ? desconto = true : desconto = false;
let valorFinal = desconto == true ? `Preço após desconto: ${valorCompra * 0.9}`: "Sem desconto";
console.log(valorFinal);