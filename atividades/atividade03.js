var idade = 18;
var conviteVIP = false;
var entrada = idade >=18 && conviteVIP == true ? "Entrada Autorizada!" : "Entrada Não Autorizada!";
console.log(entrada);

if(idade >=18 && conviteVIP == true){
    console.log("Entrada Autorizada!");
}
else{
    console.log("Entrada Não Autorizada!");
}