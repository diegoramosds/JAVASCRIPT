function ePaisagem(largura, altura){
    
   const isPaisagem = largura >= 1200 && altura >= 600;
        const mensagem = isPaisagem ? 'Essa imagem é Paisagem...' : 'Essa imagem não é Paisagem...';

        console.log(mensagem);
        return isPaisagem;
}

const tamanhoImg = ePaisagem(1200,890);

console.log(tamanhoImg);