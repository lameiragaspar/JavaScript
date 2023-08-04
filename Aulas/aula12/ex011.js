var idade = 33;
console.log(`Você tem ${idade} anos...`)

if (idade < 16 ){
    console.log(`Não pode Votar`)
} else if (idade < 18 || idade > 65 ){
    console.log('Seu voto é opcional')
} else{
    console.log('Pode Votar')
}