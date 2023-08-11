function verificar(){
    var data = new Date()
    var ano_actual = data.getFullYear()
    //acima peguei o ano actual

    var ano_nas = window.document.querySelector('input#i_ano')
    var ano_usua = Number(ano_nas.value)
    //Peguei o ano do digitado pelo usuário

    var resultado = window.document.querySelector('div#resultado')
    //Aparecerá o resultado caso todas as condições sejam satisfeitas

    if(ano_nas.value.length == 0 || ano_usua > ano_actual){
        window.alert('[ERRO!] Verifique o seu ANO DE NASCIMENTO e tente novamente [ERRO!]')
    } else {
        var idade = (ano_actual - ano_usua)
        var sexo = window.document.getElementsByName('rad_sexo')
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){ //checked verifica se foi selecionado
            genero = 'Homem'
            if(idade >= 0 && idade <= 2){ //bebê
                img.setAttribute('src','fotos/0-1-homem.png')
            }else if(idade <= 5){
                img.setAttribute('src','fotos/2-5-homem.png')
            }else if(idade <= 10){
                img.setAttribute('src','fotos/7-10-homem.png')
            }else if(idade <= 18 ){

            }else if(idade <= 15 ){

            } else if(idade <= 23){
                
            }
            
        } else if(sexo[1].checked /*Poderia ocultar*/){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 2){ //bebê
                img.setAttribute('src','fotos/0-1-mulher.png')
            }else if(idade <= 5){
                img.setAttribute('src','fotos/2-5-mulher.png')
            }else if(idade <= 10){
                img.setAttribute('src','fotos/7-10-mulher.png')
            }else if(idade <= 15 ){

            } else if(idade <= 23){

            }
        }

        resultado.innerHTML = (`Detectamos ${genero} de ${idade} ano(s)`)
        resultado.appendChild(img)

    }
}