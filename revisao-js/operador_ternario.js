let nota = 7.2
let situacao

/*
if(nota >=6){
    situacao= "Aprovado"
}
else{
    situacao = "Reprovado"
}*/
/* if(nota >=6)situacao= "Aprovado"
else situacao = "Reprovado"
*/

// As três partes do operador ternário
//1º Parte: condição (que iria depois do if)
//Entre a 1º e a 2º parte -> ?
//2º Parte: resultado, caso a condição seja VERDADEIRA
//Entre a 2º e a 3°parte -> :
//3º parte: o resultado, caso a condição seja FALSA
situacao = nota >=6 ?'APROVADO' : 'REPROVADO'

console.log(situacao)

let user = 'admin'
let userType

userType = user ==='admin' || user ==='root' ? 'Superuser' : 'Ordinary user'

console.log(userType)