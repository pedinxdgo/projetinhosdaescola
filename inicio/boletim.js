var nota1 = Number (prompt("Digite a primeira nota:"));
var nota2 = Number (prompt("Digite a segunda nota:"));
const media = (nota1 + nota2) /2;
console.log ("Suas notas são:", nota1, "e", nota2);
console.log ("Média:", media);

if(nota1>10 || nota2>10 || nota1<0 || nota2<0){
    console.log("Nota Iválida");
}
else if(media >= 7.5){
    console.log("Aprovado");
}
else if(media < 7.5 && media > 3.0){
    console.log("Em recuperação. Faça a prova de recuperação!");
    var rec= Number(prompt("Digite a nota da prova de recuperação:"));
    const novamedia=(media+rec)/2;
    console.log("A sua media após recuperação é:", novamedia);
if (novamedia>=7.5){
    console.log("Aprovado após recuperação");
}
else{
    console.log("Reprovado após recuperação");
}
}
 else{
    console.log("Reprovado");
}