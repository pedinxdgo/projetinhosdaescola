function criarCalculadorDesconto( desconto ){
    return function (preco){
        return preco - (preco * desconto);
    }
}

const desconto10 = criarCalculadorDesconto(0.10);
const desconto20 = criarCalculadorDesconto(0.20);
const desconto50 = criarCalculadorDesconto(0.50);

console.log(desconto10(200));
console.log(desconto20(500));
console.log(desconto50(1230));