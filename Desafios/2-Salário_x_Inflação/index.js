import EntradaDados from "readline-sync"

let array_salario = [
    {salario:510.00, ano:2010},
    {salario:545.00, ano:2011},
    {salario:622.00, ano:2012},
    {salario:678.00, ano:2013},
    {salario:724.00, ano:2014},
    {salario:788.00, ano:2015},
    {salario:880.00, ano:2016},
    {salario:937.00, ano:2017},
    {salario:954.00, ano:2018},
    {salario:998.00, ano:2019},
    {salario:1045.00,ano:2020}
]
let array_inflacao =[
    {inflacao:5.91, ano:2010},
    {inflacao:6.50, ano:2011},
    {inflacao:5.84, ano:2012},
    {inflacao:5.91, ano:2013},
    {inflacao:6.41, ano:2014},
    {inflacao:10.67,ano:2015},
    {inflacao:6.29, ano:2016},
    {inflacao:2.95, ano:2017},
    {inflacao:3.75, ano:2018},
    {inflacao:4.31, ano:2019},
    {inflacao:4.52, ano:2020}
]

console.log(`Escolha uma das alternativas:\n`)
console.log(`1 - Listar os salários mínimos de 2010 à 2020`)
console.log(`2 - Listar o índice IPCA de 2010 à 2020`)
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA\n`)

let opcao = Number(EntradaDados.question(`Digite o número entre 1 e 3: `))

if(opcao === 1){
    console.log(`\nVocê escolheu a opção 1...!\n`)
    for(let salario_min_ano of array_salario){

        let ano = salario_min_ano.ano
        let salario_min = ((salario_min_ano.salario).toFixed(2)).replace(".",",")

        console.log(`Ano: `.padEnd(40,".") + ano)
        console.log(`Salário mínimo: `.padEnd(40,".") + `R$ ${salario_min}\n`)
    }

}else if(opcao===2){
    console.log(`\nVocê escolheu a opção 2...!\n`)
    for(let inflacao_ano of array_inflacao){

        let ano= inflacao_ano.ano
        let ipca= ((inflacao_ano.inflacao).toFixed(2)).replace(".",",")

        console.log(`Ano: `.padEnd(40,".") + ano)
        console.log(`Inflação IPCA: `.padEnd(40,".") + `${ipca}%\n`)
    }
}else if(opcao===3){
    console.log(`\nVocê escolheu a terceira opção!\n`)
    for(let i= 0; i< array_salario.length; i++ ){/*Com uma estrutura */

        let ano= array_salario[i].ano
        let salario_min= ((array_salario[i].salario).toFixed(2)).replace(".",",")
        let ipca= ((array_inflacao[i].inflacao).toFixed(2)).replace(".",",") /*Acesso as duas coleçoes*/

        let salarioAtual= array_salario[i]
        let salarioPassado= array_salario[i - 1]
        let diferenca_sala=0
        let percentual_cres=0

        if(array_salario[i].ano === 2010){
            percentual_cres= "-"
        }else{
            diferenca_sala= (salarioAtual.salario - salarioPassado.salario)
            percentual_cres= ((diferenca_sala / salarioPassado.salario) * 100).toFixed(2).replace(".",",")+"%"
        }
        console.log(`Ano: `.padEnd(40,".") + ano)
        console.log(`Salário mínimo: `.padEnd(40,".")+`R$ ${salario_min}`)
        console.log(`Crescimento Salarial :`.padEnd(40,".")+`${percentual_cres}`)
        console.log(`Inflação IPCA: `.padEnd(40,".")+`${ipca}%\n`)
    }
}else{
    console.log(`\nOpção ${opcao} Ínvalida`)
}