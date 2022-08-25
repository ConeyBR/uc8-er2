//Encontro remoto 2
//Considere a quantidade de alunos presentes na sala, percorra até o número total e retornar os seguintes resultados:
//- Se o número for par, escreva 'par' e o número correspondente
//- Se o número for impar, escreva 'impar' e o número correspondente
//- Se o número for zero, escreva 'zero'



let numeroDeAlunos = 10

for (let contador = 0; contador <= numeroDeAlunos; contador++){
    //console.log(contador)

    if (contador == 0){
        console.log("O número atual é zero");
    }else if (contador % 2 == 0){
        console.log("O número " + contador + " é PAR")
    }else{
        console.log(`O número ${contador} é IMPAR`)
    }


}