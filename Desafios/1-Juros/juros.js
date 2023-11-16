import entradaDados from 'readline-sync'

console.log('\nAplicação de Juros!\n')

let divida = Number(entradaDados.question('Informe o valor devido R$: '))
let dias_atraso = Number(entradaDados.question('Informe quantos dias se passaram desde o vencimento do boleto: '))
let valor_total = 0

console.log(`\nValor original da dívida: ${divida.toFixed(2)}_R$`)
console.log(`Dias de atraso: ${dias_atraso}`)

if(divida == 0 && dias_atraso == 0){
    console.log('Sem dívida, sem juros :)\nBoas compras futuras!')
    console.log('Fim da execuçao do programa!\n')

}else if(divida == 0 && dias_atraso > 0){
    console.log('[ERRO] \nSe não tem dívida então não tem dias em atraso! \nVerifque os dados e tente novament :)')

}else if(divida > 0 && dias_atraso == 0){
    console.log('Sem juros adicionais!:)')
    valor_total = divida
    console.log(`Valor total a pagar: ${valor_total.toFixed(2)}_R$\n`)
    
}else{
    if(dias_atraso > 15){

        console.log('Taxa de juros: 10%')
        valor_total = ((10/100 * divida) + divida)
    }else{

        console.log('Taxa de juros: 5%')
        valor_total = (( 5/100 * divida) + divida)
    }
    console.log(`Valor total com juros: ${valor_total.toFixed(2)}_R$\n`)
}