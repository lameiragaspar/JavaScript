function verificar(){
    var data = new Date()
    var ano_actual = data.getFullYear()
    //acima peguei o ano actual

    var ano_nas = window.document.querySelector('input#i_ano')
    var ano = Number(ano_nas.value)
    //Peguei o ano do sistema

    if(ano_nas.value.length == 0 || ano > ano_actual){
        window.alert('Verifque os dados e tente novamente')
    } else {
        var idade = (ano_actual - ano)
        var sexo = window.document.getElementsByName('rad_sexo')
        var genero = ''
        if(genero == ''){
            window.alert('Verifque os dados e tente novamente')
        } else if(sexo[0].checked){
            genero = 'Maculino'
        } else if(sexo[1].checked /*Poderia ocultar*/){
            genero = 'Feminino'
        } 
    }

    var resultado = window.document.querySelector('div#resultado')

    resultado.innerHTML = (` estámos no ano ${ano_actual} idade ${idade} e seu sexo é ${genero}`)
}
