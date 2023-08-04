var agora = new Date()
var dia_semana = agora.getDay()
/*
0 = Domundo 1 = Segunda 
2 = Terca 3 = Quarta 
4= Quinta 5= Sexta 
6 = Sábado
*/
console.log('Hoje é ')
 switch (dia_semana){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Seunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
      console.log('Ocorreu um erro inesperado, Verifique a sua conexão a internet e tente nova mente') 
      break 
 }
