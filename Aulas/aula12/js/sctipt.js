function carregar(){
    var agora = new Date()
    var hora = agora.getHours() 
    //Traz a data do sisema
    
    var div_hora = window.document.querySelector('div#hora') 
    //Chamei a div que contém a msg d que horas são
    div_hora.innerHTML = `Agora são <strong>${hora}</strong> horas` 
    //mostrei as horas na tela

    var imagem = window.document.getElementById('imagem')
    var div_msg = window.document.getElementById('msg')

  if(hora < 5){ //Madrugada
        window.document.body.style.background = '#202b4b' 
        imagem.src = 'fotos/madrugada.png'
        div_msg.innerHTML = '<strong>Já é madrugada!</strong>'

    } else if(hora < 12){ //manhã
        window.document.body.style.background = '#80af92b2'
        imagem.src = 'fotos/bom_dia.png'
        div_msg.innerHTML = '<strong>Bom Dia!</strong>'

    } else if(hora < 18){ //tarde
        window.document.body.style.background = '#a3644b' 
        imagem.src = 'fotos/boa_tarde.png'
        div_msg.innerHTML = '<strong>Boa Tarde!</strong>'

    } else { //noite
        window.document.body.style.background = '#4d4d4b' 
        imagem.src = 'fotos/boa_noite.png'
        div_msg.innerHTML = '<strong>Boa Noite!</strong>'

    }
}

