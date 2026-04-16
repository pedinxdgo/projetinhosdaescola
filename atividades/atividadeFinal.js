let estoque = ["SSD NVME 1 Terabyte", "Nvidia geForce RTX 4060", "AMD Ryzen 5 5600", "Memoria RAM DDR4 8GB", "Placa Mãe MSI A520M"];
estoque.push("Fonte de Alimentação MSI MAG 600W");
let clienteNome = "Zeca Tatu";
let clienteIdade = 18;
let possuiCupom = false;
let valorCompra = 500;

function processarVenda(valorTotal, cupoAtivo){
    let valorFinal = valorTotal > 500 || cupoAtivo == true ? valorTotal * 0.85 : valorTotal;
    return (valorFinal);
}


if(clienteIdade >= 16){
    console.log(`Venda autorizada para ${clienteNome}!`);
    let venda = processarVenda(valorCompra, possuiCupom);

    while(estoque.length > 5){
        console.log(`Despachando item: ${estoque[0]}`);
        estoque.shift();
    } 
    console.log(`Relatório da Loja: Cliente ${clienteNome} processou um pedido de R$ ${venda.toFixed(2)}. \nItens restantes no estoque: ${estoque.length}`);
    console.log(`-> ${estoque.join(" - ")} <-`);

}
else{
    console.log("Venda bloqueada. Idade insuficiente!");
}

