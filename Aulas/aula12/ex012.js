var horas = new Date()
var hora = horas.getHours()

var mins = new Date()
var min = mins.getMinutes()

console.log(`Agora são ${hora}:${min}!`)

if (hora >= 0 && hora < 5){
    console.log('Já é Madrugada!')
} else if (hora < 12){
    console.log('Bom dia') 
} else if (hora < 18 ){   
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}

