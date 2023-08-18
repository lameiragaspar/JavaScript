function gerar(){
    var tab = document.querySelector('input#tabuada')
    var num_tab = Number(tab.value)
    var select_tab = document.getElementById('sel_tab')

    if(tab.value.length == 0){
        window.alert('[ERRO!] insira um número pra poder ver a sua Tabuada!')
    }else {
        select_tab.innerHTML = ''
        for(var cont = 1; cont <= 12; cont ++){
            var opcão = document.createElement('option')
            //var resultado = (num_tab * cont)
            opcão.innerHTML += `${num_tab} x ${cont} = ${num_tab * cont} `
            opcão.value = `tab${cont}`
            select_tab.appendChild(opcão)
        } 
    }  
}