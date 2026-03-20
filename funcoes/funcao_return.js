function calcularTotal (preco1, preco2){
    return preco1 + preco2;

}

let resultado = calcularTotal(100, 500); //Somar


// Desafio: Imprimir o resultado usando template string e concatenando a string com o resultado da função
console.log("O preço total é: " + resultado);
console.log(`O preço total é: ${resultado}\n`);