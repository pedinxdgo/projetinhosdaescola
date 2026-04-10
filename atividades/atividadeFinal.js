let estoque = ["SSD 1 Terabyte", "Nvidia geForce RTX 4060", "AMD Ryzen 5 5600", "Memoria RAM DDR4 8GB", "Placa Mãe MSI A520M"];
estoque.push("Fonte de Alimentação MSI MAG 600W");
let clienteNome = "Zeca Tatu";
let clienteIdade = 17;
let possuiCupom = false;
let valorCompra = 550;

function processarVenda(valorCompra, possuiCupom){
    let valorFinal = valorCompra > 500 || possuiCupom == true ? valorCompra * 0.85 : valorCompra;
    return (valorFinal);
}


if(clienteIdade >= 16){
    console.log(`Venda autorizada para ${clienteNome}!`);
    let venda = processarVenda(valorCompra, possuiCupom);

    for(let i = 0; i < estoque.length; i++){
        console.log(`Despachando item: ${estoque[i]}`);
        estoque.splice(0, 1);
    } 
    console.log(`Relatório da Loja: Cliente ${clienteNome} processou um pedido de R$ ${venda}. \nItens restantes no estoque: ${estoque.length}`);

}
else{
    console.log("Venda bloqueada. Idade insuficiente!");
}
console.log(estoque);
