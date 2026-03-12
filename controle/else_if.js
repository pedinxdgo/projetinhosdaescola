//Desafio
let nota1 = 8.5;
let nota2 =  6.5;
let media = (nota1 + nota2) / 2;

if(media>=7.0){
    console.log("Aprovado");
}
else if(media >=5.0 && media <7.0){
    console.log("Em recuperação");
}
else{
    console.log("Reprovado");
}
console.log(`As notas sao ${nota1.toFixed(2)} e ${nota2.toFixed(2)} `);
console.log(`A media e: ${media.toFixed(2)}`);

