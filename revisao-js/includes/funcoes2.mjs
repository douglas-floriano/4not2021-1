// Nesse arquivo, há apenas um item sendo exportado, e é uma function
//Podemos usar export default

export default function dobraVet(vet){
// Cria um novo vetor 
    let res = []
    for(let n of vet) res.push(n * 2)
    return res
}