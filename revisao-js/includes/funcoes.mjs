// Exportar as funcoes para uso dentro de outro arquivo


export function somaVet(vet){
    let soma = 0
    for (let n of vet) soma += n
    return soma
}

//Cria um novo  vetor com cada elemento de vetor original
// elevando ao quadrado
/*
export function quadradoVet(vet){
    let res =[]
    for (let n of vet) res.push(n ** 2)
    return res
}
*/

// Export funciona para pegar dados para algum outro arquivo