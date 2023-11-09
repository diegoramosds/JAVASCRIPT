function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours


    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.png.png'
        document.body.style.background = '#AA7B'

    }
    else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png.png'
        document.body.style.background =  '#B2B7BD'

        
    }
    else {
        img.src = 'noite.png.png'
        document.body.style.background = '#8E6A57'

        
    }
}
