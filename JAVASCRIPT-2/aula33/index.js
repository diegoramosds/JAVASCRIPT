const pessoas = {
    nome:  'Luiz',
    sobrenome: 'Miranda',
    idade : 30,
    endereo: {
        rua: 'Av Brail',
        numero: 320
    }
};


//atribuição via desestruturação
const {nome, sobrenome,...resto} = pessoas;
console.log(nome, resto);