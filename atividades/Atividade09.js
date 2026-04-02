function saudacao(nome, horario){
    if (horario >= 0 && horario <=11){
        console.log(`Bom dia ${nome}`);
    }
    else if(horario >=12 && horario<=17){
        console.log(`Boa tarde ${nome}`);
    }
    else{
        console.log(`Boa noite ${nome}`);

    }
}


let nome = "Pedro Potrick";
let horario = 11;
saudacao(nome, horario);