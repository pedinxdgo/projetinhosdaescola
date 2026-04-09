let estoque = ["SSD 1 Terabyte", "Nvidia geForce RTX 4060", "AMD Ryzen 5 5600", "Memoria RAM DDR4 8GB", "Placa Mãe MSI A520M"];
estoque.push("Fonte de Alimentação MSI MAG 600W");
let clienteNome = "Zeca Tatu";
let clienteIdade = 16;
let possuiCupom = true;
let i;
let valorCompra = 500;
let venda = processarVenda(valorCompra, possuiCupom);


function processarVenda(valorTotal, cupomAtivo){
    var valorFinal = valorTotal > 500 || cupomAtivo == true ? valorTotal * 0.85 : valorTotal;
    return (valorFinal);
}
if(clienteIdade >= 16){
    console.log(`Venda autorizada para ${clienteNome}!`);
    for(i = 0; i < 1; i++){
        console.log(`Despachando item: ${estoque[i]}`);
        estoque.shift();
    }    
    console.log(`Relatório da Loja: ${clienteNome} processou um pedido de R$ ${venda}. Itens restantes no estoque: ${estoque.length}`);

}
else{
    console.log("Venda bloqueada. Idade insuficiente!");
}
