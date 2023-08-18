let valores = [8, 1, 7, 4, 2, 9]
/*console.log(`${valores[0]}`)
console.log(`${valores[1]}`)
console.log(`${valores[2]}`)
console.log(`${valores[3]}`)
console.log(`${valores[4]}`)
console.log(`${valores[5]}`)

// forma mais fácil

for(let pos = 0; pos < valores.length ; pos++){
    console.log(`O Vector na posição ${pos} é o valor${valores[pos]}`)
}*/

//forma simplifada do fácil
valores.sort()
for(let pos in valores){
    console.log(`O valor ${valores[pos]} está na posição ${pos}`)
}