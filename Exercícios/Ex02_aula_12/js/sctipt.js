function verificar(){
    var data = new Date()
    var ano_actual = data.getFullYear()
    //acima peguei o ano actual

    var ano_nas = window.document.querySelector('input#i_ano')
    var ano = Number(ano_nas.value)
    //Peguei o ano do sistema

    var resultado = window.document.querySelector('div#resultado')
    //Aparecerá o resultado caso todas as condições sejam satisfeitas

    if(ano_nas.value.length == 0 || ano > ano_actual){
        window.alert('[ERRO!] Verifique o seu ANO DE NASCIMENTO e tente novamente [ERRO!]')
    } else {
        var idade = (ano_actual - ano)
        var sexo = window.document.getElementsByName('rad_sexo')
        var genero = ''
        if(sexo[0].checked){ //checked verifica se foi selecionado
            genero = 'Homem'
            resultado.innerHTML = (`Detectamos ${genero} de ${idade} anos`)
            var imagem = window.document.querySelector('img#imagem')
            //imagem.style.display = 'block'


        } else if(sexo[1].checked /*Poderia ocultar*/){
            genero = 'Mulher'
            resultado.innerHTML = (`Detectamos ${genero} de ${idade} anos`)

        } if(genero == ''){
            window.alert('[ERRO!] Verifique o seu SEXO e tente novamente [ERRO!]')
        } 
    }
   
}