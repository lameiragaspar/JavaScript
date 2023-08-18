let num = [5, 2, 8, 7, 1]
console.log(num )
console.log(`O meu arrey/vector tem ${num.length} posições`)
//console.log(`O primeiro valor do vector é ${num[0]}`)
//console.log(`Se adicionar alguns elementos ele fica com ${num.push(3,4)} posições!`)
console.log(`Organizando o arrey ele fica assim ${num.sort()}`)

var pos = num.indexOf(7)

//num.push(4)

if(pos == -1){
    console.log(`valor não encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
