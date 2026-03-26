const aluno = {
    nome: "Pedro",
    idade: "16",
    curso: "ADS"   
}
console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A"; //adicionar
aluno.idade = 18; // alterar
delete aluno.curso; // remover 
console.log(aluno);
