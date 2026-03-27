let nota1 = 7.5;
let nota2 = 8.0;
let media = (nota1 + nota2) / 2;

if(nota1>10 || nota1<0 || nota2 > 10 || nota2<0){
    console.log("Dados inválidos");
}
else if(media >= 7.0){
    console.log("Aprovado");
}
else if(media >= 5.0 && media < 7.0){
    console.log("Em recuperação");
}
else{
    console.log("Reprovado");
}