function contar(){
    var ini = window.document.getElementById('i_inicio')
    var inicio = Number(ini.value)
    var fim = window.document.getElementById('i_fim')
    var final = Number(fim.value)
    var pas = window.document.getElementById('i_passo')
    var passo = Number(pas.value)

    var resultado = window.document.querySelector('div#res')
    

    if(ini.value.length == 0 || fim.value.length == 0){
        window.alert('[Inpossível Contar!] Verifique os dados e tente novamente!')
    }else if(pas.value.length == 0 || passo == 0){
        window.alert('[PASSO INVÁLIDO!] Considerando passo [1]')
        passo = 1
        if(inicio < final){
            resultado.innerHTML = ''
            for(var cont = inicio; cont <= final; cont += passo){
                resultado.innerHTML += `${cont}...`
            }
        }else if(inicio > final){
            resultado.innerHTML = ''
            for(var cont = inicio; cont >= final; cont-=passo){
                resultado.innerHTML += `${cont}...`
            }
        }
    }else if(inicio < final){
        resultado.innerHTML = ''
        for(var cont = inicio; cont <= final; cont += passo){
            resultado.appendChild(`${cont}...`)
        }
    } else{
        resultado.innerHTML = ''
        for(var cont = inicio; cont >= final; cont-=passo){
            resultado.appendChild(`${cont}...`)
        }
    } 
}